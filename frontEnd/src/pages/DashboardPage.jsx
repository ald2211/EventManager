import { useState, useEffect } from "react";
import { deleteEvent, fetchUserEvents } from "../api/events";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import { useAuth } from "../hooks/useAuth";
import { BeatLoader } from "react-spinners";
import { Success } from "../helpers/popup";
import { DashboardHeader } from "../components/events/DashBoardHeader";
import { EventFilters } from "../components/events/EventFilters";
import { EventCard } from "../components/events/EventCard";
import { Pagination } from "../components/events/Pagination";


const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    fetchEvents();
  }, [currentPage]);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetchUserEvents({
        search: searchTerm,
        date: dateFilter,
        location: locationFilter,
        page: currentPage,
      });
      setEvents(response.events);
    } catch (err) {
      setError(err.message || "Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchEvents();
  };

  const handleDelete = async (eventId) => {
    try {
      await deleteEvent(eventId);
      setEvents(events.filter((event) => event._id !== eventId));
      Success("Event deleted successfully");
    } catch (err) {
      setError(err.message || "Failed to delete event");
    }
  };

  const toggleReadMore = (id) => {
    setExpandedDescriptions((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Layout>
      <DashboardHeader user={user} />
      <div className="max-w-4xl mx-auto p-4">
        <EventFilters
          searchTerm={searchTerm}
          dateFilter={dateFilter}
          locationFilter={locationFilter}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
          onDateChange={(e) => setDateFilter(e.target.value)}
          onLocationChange={(e) => setLocationFilter(e.target.value)}
          onSubmit={handleSearch}
        />
        <div className="flex flex-wrap gap-4">
          {loading ? (
            <div className="flex justify-center items-center w-full h-full p-4">
              <BeatLoader color="#4A90E2" size={10} />
            </div>
          ) : error ? (
            <div className="alert alert-error flex-grow">
              <span>{error}</span>
            </div>
          ) : events.length === 0 ? (
            <div className="text-center p-4 text-gray-500 flex-grow">
              No events found{" "}
              <span role="img" aria-label="sad emoji">
                😔
              </span>
            </div>
          ) : (
            events.map((event) => (
              <EventCard
                key={event._id}
                event={event}
                onEdit={() => navigate(`/events/edit/${event._id}`)}
                onDelete={() => handleDelete(event._id)}
                toggleReadMore={() => toggleReadMore(event._id)}
                isExpanded={expandedDescriptions[event._id]}
              />
            ))
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          hasMore={events.length >= 10}
          isLoading={loading}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
