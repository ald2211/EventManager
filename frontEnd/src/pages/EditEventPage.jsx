import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "../components/layout/PageLayout";
import { EventForm } from "../components/events/EventForm";
import { getEvent } from "../api/events";
import first from "../assets/first.png";
import { Success } from "../helpers/popup";

export const EditEventPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await getEvent(id);
        setEvent(response.event);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchEvent();
  }, [id]);

  const handleUpdate = async () => {
    Success('Event updated Successfully')
    navigate("/dashboard");
  };

  if (error) {
    return (
      <Layout>
        <div className="alert alert-error shadow-lg mt-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18.364 5.636L5.636 18.364M5.636 5.636l12.728 12.728"
              />
            </svg>
            <span>{error}</span>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div
        className=" border bg-cover bg-center h-full pb-12 rounded-md"
        style={{
          backgroundImage: `url(${first})`,
        }}
      >
        {event ? (
          <EventForm event={event} onSubmit={handleUpdate} />
        ) : (
          <div className="flex justify-center items-center h-40">
            <button className="btn btn-square btn-lg loading"></button>
          </div>
        )}
      </div>
    </Layout>
  );
};
