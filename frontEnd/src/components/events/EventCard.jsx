import { useState } from "react";

export const EventCard = ({
  event,
  onEdit,
  onDelete,
  toggleReadMore,
  isExpanded,
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const isLongDescription = event.description.length > 300;
  const description = isExpanded
    ? event.description
    : event.description.slice(0, 300);

  const handleDeleteConfirmation = () => {
    setIsPopupVisible(false);
    onDelete();
  };

  return (
    <div className="card bg-base-100 shadow-md flex-grow sm:basis-1/2 md:basis-1/3 relative">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{event.title}</h3>
          <div className="space-x-2">
            <button className="btn btn-outline btn-sm" onClick={onEdit}>
              Edit
            </button>
            <button
              className="btn btn-error btn-sm"
              onClick={() => setIsPopupVisible(true)}
            >
              Delete
            </button>
          </div>
        </div>
        <p className="text-gray-600 mt-2">
          {description}
          {isLongDescription && (
            <span
              className="text-blue-500 cursor-pointer ml-2"
              onClick={toggleReadMore}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </span>
          )}
        </p>
        <div className="mt-4 flex gap-4 text-sm text-gray-500">
          <span>📅 {new Date(event.date).toLocaleDateString()}</span>
          <span>📍 {event.location}</span>
        </div>
      </div>

      {/* Confirmation Pop-Up */}
      {isPopupVisible && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
            <p className="text-gray-800 text-center mb-4">
              Are you sure you want to delete this event? This action cannot be
              undone.
            </p>
            <div className="flex justify-between gap-4">
              <button
                className="btn btn-error flex-1"
                onClick={handleDeleteConfirmation}
              >
                Yes, Delete
              </button>
              <button
                className="btn btn-secondary flex-1"
                onClick={() => setIsPopupVisible(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
