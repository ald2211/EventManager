export const Pagination = ({ currentPage, onPageChange, hasMore, isLoading }) => (
    <div className="flex justify-center gap-2 mt-4">
      <button
        className="btn btn-outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || isLoading}
      >
        Previous
      </button>
      <button
        className="btn btn-outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasMore || isLoading}
      >
        Next
      </button>
    </div>
  );
  