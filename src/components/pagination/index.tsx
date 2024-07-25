import { useMemo } from "react";
import { PaginationContainer, IconStyles, PageButton } from "./styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import api from "@/services/api";

interface PaginationProps {
  pages?: number;
  setCurrentPage(value: number): void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  pages,
  currentPage,
  setCurrentPage,
}) => {
  const visiblePages = useMemo(() => {
    const maxVisiblePages = 2;

    const ellipsiSize = 1;
    const startPage = pages
      ? Math.max(0, currentPage - maxVisiblePages + ellipsiSize, 0)
      : 0;
    const endPage = pages
      ? Math.min(currentPage + maxVisiblePages + ellipsiSize, pages)
      : 0;

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  }, [currentPage, pages]);

  const canGoBack = currentPage > 1;
  const canGoFoward = currentPage < pages!;

  return (
    <PaginationContainer>
      <IconStyles
        onClick={() => setCurrentPage(currentPage - 1)}
        active={canGoBack}
        disabled={!canGoBack}
      >
        <FaAngleLeft />
      </IconStyles>

      <div>
        {visiblePages.map((page) => (
          <PageButton
            key={page}
            onClick={(e) => setCurrentPage(page)}
            active={page === currentPage}
          >
            {page}
          </PageButton>
        ))}
      </div>

      <IconStyles
        onClick={() => setCurrentPage(currentPage + 1)}
        active={canGoFoward}
        disabled={!canGoFoward}
      >
        <FaAngleRight />
      </IconStyles>
    </PaginationContainer>
  );
};

export default Pagination;
