// src/components/Pagination.jsx
import React from "react";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="join flex justify-center mt-4">
      {pages.map((page) => (
        <input
          key={page}
          type="radio"
          name="page"
          aria-label={page}
          className={`join-item btn btn-square ${
            currentPage === page ? "bg-emerald-300" : ""
          }`}
          checked={currentPage === page}
          onChange={() => onPageChange(page)}
        />
      ))}
    </div>
  );
};
