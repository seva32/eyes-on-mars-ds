import React, { useEffect } from "react";
import { usePagination, DOTS } from "../utils/usePagination";

import "./pagination.scss";

interface IPagination {
  onPageChange: any;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className: string;
  bgColor?: string;
  style?: React.CSSProperties;
}

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
  bgColor = "#f4f4f4",
  style,
}: IPagination) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  useEffect(() => {
    return () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  });

  if (
    paginationRange?.length &&
    (currentPage === 0 || paginationRange.length < 2)
  ) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange?.[paginationRange.length - 1];

  const styleParsed = {
    ...style,
    backgroundColor: bgColor,
  };

  return (
    <ul className={`eom-pagination-container ${className}`}>
      <li
        className={`eom-pagination-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={onPrevious}
        key={`${Math.random() * 10000}`}
        style={styleParsed}
      >
        PREV
      </li>
      {paginationRange?.length &&
        paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <li
                className="eom-pagination-item dots"
                key={`${Math.random() * 10000}`}
                style={styleParsed}
              >
                &#8230;
              </li>
            );
          }

          return (
            <li
              className={`eom-pagination-item ${
                pageNumber === currentPage ? "selected" : ""
              }`}
              onClick={() => onPageChange(pageNumber)}
              key={`${Math.random() * 10000}`}
              style={styleParsed}
            >
              {pageNumber}
            </li>
          );
        })}
      <li
        className={`eom-pagination-item ${
          currentPage === lastPage ? "disabled" : ""
        }`}
        onClick={onNext}
        key={`${Math.random() * 10000}`}
        style={styleParsed}
      >
        NEXT
      </li>
    </ul>
  );
};

export default Pagination;
