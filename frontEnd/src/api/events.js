const headers = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});
const baseurl = process.env.BASE_URL;
export const fetchUserEvents = async (searchParams) => {
  const queryString = new URLSearchParams(searchParams).toString();
  const response = await fetch(`${baseurl}/events?${queryString}`, {
    headers: headers(),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to fetch events");
  }

  return response.json();
};

export const createEvent = async (eventData) => {
  const response = await fetch(`${baseurl}/events`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to create event");
  }

  return response.json();
};

export const updateEvent = async (id, eventData) => {
  const response = await fetch(`${baseurl}/events/${id}`, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to update event");
  }

  return response.json();
};

export const deleteEvent = async (id) => {
  const response = await fetch(`${baseurl}/events/${id}`, {
    method: "DELETE",
    headers: headers(),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to delete event");
  }

  return response.json();
};

export const getEvent = async (id) => {
  const response = await fetch(`${baseurl}/events/${id}`, {
    headers: headers(),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to fetch event");
  }

  return response.json();
};
