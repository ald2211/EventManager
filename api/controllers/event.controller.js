import { errorHandler } from "../utils/customError.js";
import UserEvent from "../models/event.model.js";

//get all events from the logged in users
export const getEvents = async (req, res, next) => {
  try {
    const { search, date, location, page = 1, limit = 10 } = req.query;
    const query = { userId: req.user.id };

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    if (date) {
      query.date = { $gte: new Date(date) };
    }

    if (location) {
      query.location = { $regex: location, $options: "i" };
    }

    const events = await UserEvent.find(query)
      .sort({ date: 1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await UserEvent.countDocuments(query);

    res.json({
      events,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (error) {
    console.log("err:", error);
    next(errorHandler(500, "Error fetching events"));
  }
};

//create new event
export const addEvent = async (req, res, next) => {
  try {
    const { title, description, date, location } = req.body;
    const event = new UserEvent({
      title,
      description,
      date,
      location,
      userId: req.user.id,
    });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    console.log("error:", error);
    next(errorHandler(500, "Error creating event"));
  }
};

//update event
export const updateEvent = async (req, res, next) => {
  try {
    const event = await UserEvent.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!event) {
      return next(errorHandler(404, "Event not found"));
    }

    Object.assign(event, req.body);
    await event.save();
    res.json(event);
  } catch (error) {
    next(errorHandler(500, "Error updating event"));
  }
};

//get single event
export const getEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await UserEvent.findById(id);

    res.json({
      event: data,
    });
  } catch (error) {
    console.log("err:", error);
    next(errorHandler(500, "Error fetching events"));
  }
};

export const deleteEvent = async (req, res, next) => {
  try {
    const event = await UserEvent.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!event) {
      return next(errorHandler(404, "Event not found"));
    }

    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    next(errorHandler(500, "Error deleting event"));
  }
};
