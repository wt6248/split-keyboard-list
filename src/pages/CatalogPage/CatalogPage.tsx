import { KeyboardCard } from "@/pages/CatalogPage/Components/KeyboardCard";
import { Sidebar } from "@/pages/CatalogPage/Components/Sidebar";
import useFilterParams from "@/hooks/useFilterParams";
import { useKeyboards } from "@/hooks/useKeyboard";
import { theme } from "@/tokens/theme";
import styled from "@emotion/styled";
import { useState } from "react";
import { DetailCardModal } from "./Components/DetailCardModal";

export const CatalogPage = () => {
  const { activeFilters, setFilter } = useFilterParams();
  // console.log(activeFilters);
  const { data } = useKeyboards({ filters: activeFilters });
  const [selectedKeyboard, setSelectedKeyboard] = useState(null)
  
  return (
    <>
      {selectedKeyboard && <DetailCardModal
      isOpen={!!selectedKeyboard}
      onClose={()=> setSelectedKeyboard(null)}
      keyboard={selectedKeyboard}/>}
      {/* 사이드바 필터 */}
      <Sidebar />
      {/* 본문 */}
      <HomepageContainer>
        <GridContainer>
          {data?.keyboards.map((keyboard) => {
            return (
              <KeyboardCard
                key={keyboard.id}
                title={keyboard.name}
                imageUrl={keyboard.image_url}
                discription={keyboard.description}
                linkUrl={keyboard.github_url ?? keyboard.website_url}
                onClick={()=>setSelectedKeyboard(keyboard)}
              />
            );
          })}
        </GridContainer>
        {/* pagenation */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: data?.totalPages ?? 0 }, (_, i) => i + 1).map(
            (pageNumber) => (
              <PageButton
                $active={pageNumber === (Number(activeFilters.page?.[0]) || 1)}
                onClick={() => setFilter("page", String(pageNumber))}
              >
                {pageNumber}
              </PageButton>
            ),
          )}
        </div>
      </HomepageContainer>
    </>
  );
};

const HomepageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background-color: ${theme.colors.background};
  overflow-x: auto;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 1.25rem;
  width: fit-content;
  `

const PageButton = styled.div<{ $active: boolean }>`
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid ${theme.colors.border};
  background-color: ${({ $active }) => ($active ? theme.colors.accent : theme.colors.card)};
  color: ${theme.colors.text.main};
`;
