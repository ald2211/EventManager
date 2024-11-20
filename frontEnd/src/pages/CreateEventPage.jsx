import { useNavigate } from "react-router-dom";
import { Layout } from "../components/layout/PageLayout";
import { EventForm } from "../components/events/EventForm";
import first from "../assets/first.png";
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
          backgroundImage: `url(${first})`,
        }}
      >
        <EventForm onSubmit={handleCreate} />
      </div>
    </Layout>
  );
};
