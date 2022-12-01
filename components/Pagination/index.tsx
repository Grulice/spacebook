import React from "react";
import { DEFAULT_BOUNDARY_COUNT, DEFAULT_SIBLING_COUNT } from "./consts";
import { Ellipsis } from "./partials/Ellipsis";
import { PageButton } from "./partials/PageButton";
import { PageTurnButton } from "./partials/PageTurnButton";
import { compilePageButtons } from "./utils";

export interface IPaginationProps {
  /** 1-based */
  currentPage: number;
  onPageChanged: (page: number) => void;

  totalPagesCount: number;

  /** How many pages to display around the current page */
  siblingCount?: number;

  /** How many start/end pages to display */
  boundaryCount?: number;

  className?: string;
}

export const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  onPageChanged,
  totalPagesCount,
  siblingCount = DEFAULT_SIBLING_COUNT,
  boundaryCount = DEFAULT_BOUNDARY_COUNT,
  className,
}) => {
  const page = (pageNumber: number) =>
    pageNumber === currentPage ? (
      <PageButton key={pageNumber} selected>
        {pageNumber}
      </PageButton>
    ) : (
      <PageButton key={pageNumber} onClick={() => onPageChanged(pageNumber)}>
        {pageNumber}
      </PageButton>
    );
  const ellipsis = (key: number) => <Ellipsis key={key} />;

  return (
    <div className={`flex items-center ${className}`}>
      <div className='flex gap-2'>
        <PageTurnButton
          direction='previous'
          onClick={() => onPageChanged(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {compilePageButtons(
          currentPage,
          totalPagesCount,
          boundaryCount,
          siblingCount,
          page,
          ellipsis
        )}
        <PageTurnButton
          direction='next'
          onClick={() => onPageChanged(currentPage + 1)}
          disabled={currentPage === totalPagesCount}
        />
      </div>
    </div>
  );
};
