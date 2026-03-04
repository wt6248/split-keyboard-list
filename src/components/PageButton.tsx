import useFilterParams from "@/hooks/useFilterParams";
import { theme } from "@/tokens/theme";
import styled from "@emotion/styled";

interface pageButtonParams {
  totalPage : number
}
export const PageButton =({totalPage}: pageButtonParams) => {
  const {activeFilters, setFilter} = useFilterParams()
  const currentPage = Number(activeFilters.page?.[0]) || 1
  return (
<div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPage}, (_, i) => i + 1).map(
            (pageNumber) => (
              <StyledPageButton
                $active={pageNumber === currentPage}
                onClick={() => setFilter("page", String(pageNumber))}
              >
                {pageNumber}
              </StyledPageButton>
            ),
          )}
        </div>

  )
}

const StyledPageButton = styled.div<{ $active: boolean }>`
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid ${theme.colors.border};
  background-color: ${({ $active }) => ($active ? theme.colors.accent : theme.colors.card)};
  color: ${theme.colors.text.main};
  cursor: pointer;
`;