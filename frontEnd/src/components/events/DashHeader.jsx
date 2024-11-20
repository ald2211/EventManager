const DashBoardHeader = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 text-center mb-4">
        Welcome, <span className="text-blue-500">{user}</span>!
      </h1>
      <p className="text-lg md:text-xl text-gray-600 text-center">
        Manage your events effortlessly with{" "}
        <span className="font-semibold text-blue-400">Event Manager</span>.
      </p>
    </div>
  );
};

export default DashBoardHeader;
