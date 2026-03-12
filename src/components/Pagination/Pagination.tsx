import React from 'react';
import './Pagination.css';

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({ 
  currentPage = 1, 
  totalPages = 1, 
  onPageChange,
  maxVisiblePages = 5 
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  // Calculate which page numbers to show
  const getPageNumbers = (): number[] => {
    const pages: number[] = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust start page if we're near the end
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="custom-pagination-nav">
      <ul className="custom-pagination">
        {/* Previous Button */}
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            aria-label="Previous"
          >
            <span aria-hidden="true">‹</span>
          </button>
        </li>

        {/* First Page */}
        {pageNumbers[0] > 1 && (
          <>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => handlePageClick(1)}
              >
                1
              </button>
            </li>
            {pageNumbers[0] > 2 && (
              <li className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            )}
          </>
        )}

        {/* Page Numbers */}
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={`page-item ${page === currentPage ? 'active' : ''}`}
          >
            <button
              className="page-link"
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Last Page */}
        {pageNumbers[pageNumbers.length - 1] < totalPages && (
          <>
            {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
              <li className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            )}
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => handlePageClick(totalPages)}
              >
                {totalPages}
              </button>
            </li>
          </>
        )}

        {/* Next Button */}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            aria-label="Next"
          >
            <span aria-hidden="true">›</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
