import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-white text-black ">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center bg-gray-200 rounded-full w-10 h-10">
              <span className="text-black font-bold text-lg">📅</span>
            </div>
            <h1 className="text-2xl font-semibold tracking-wide">
              Event Manager
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <button
              onClick={() => navigate("/dashboard")}
              className="px-4 py-2 text-black hover:text-gray-600 transition duration-200"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/events/new")}
              className="px-4 py-2 text-black hover:text-gray-600 transition duration-200"
            >
              Create Event
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
