export const EventFilters = ({
    searchTerm,
    dateFilter,
    locationFilter,
    onSearchChange,
    onDateChange,
    onLocationChange,
    onSubmit,
  }) => (
    <form onSubmit={onSubmit} className="flex gap-4 flex-wrap mb-3">
      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={onSearchChange}
        className="input input-bordered flex-1"
      />
      <input
        type="date"
        value={dateFilter}
        onChange={onDateChange}
        className="input input-bordered"
      />
      <input
        type="text"
        placeholder="Location"
        value={locationFilter}
        onChange={onLocationChange}
        className="input input-bordered"
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
  