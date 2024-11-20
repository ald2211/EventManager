import { useNavigate } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import { EventForm } from "../components/events/EventForm";
import eventOne from "../assets/eventOne.jpg";
import { Success } from "../helpers/popup";

export const CreateEventPage = () => {
  const navigate = useNavigate();

  const handleCreate = async () => {
    Success('Event created Successfully')
    navigate("/dashboard");
  };

  return (
    <Layout>
      <div
        className=" border bg-cover bg-center h-full pb-12 rounded-md"
        style={{
          backgroundImage: `url(${eventOne})`,
        }}
      >
        <EventForm onSubmit={handleCreate} />
      </div>
    </Layout>
  );
};
