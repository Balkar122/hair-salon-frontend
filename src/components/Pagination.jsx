const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-full ${
            currentPage === page ? 'bg-gold text-black' : 'bg-white dark:bg-neutral-800'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  )
}

export default Pagination