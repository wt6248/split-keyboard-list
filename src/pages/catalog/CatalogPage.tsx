import { KeyboardCard } from "@/pages/catalog/Components/KeyboardCard";
import { Sidebar } from "@/pages/catalog/Components/Sidebar";
import useFilterParams from "@/hooks/useFilterParams";
import { useKeyboards } from "@/hooks/useKeyboard";
import { theme } from "@/tokens/theme";
import styled from "@emotion/styled";
import { useState } from "react";
import { DetailCardModal } from "./Components/DetailCardModal";
import { type KeyboardRow } from "@/types/keyboard";
import { PageButton } from "@/components/PageButton";

export const CatalogPage = () => {
  const { activeFilters } = useFilterParams();
  const { data } = useKeyboards({ filters: activeFilters });
  const [selectedKeyboard, setSelectedKeyboard] = useState<KeyboardRow | null>(null)
  
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
          {data?.keyboards.map((keyboard : KeyboardRow) => {
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
        <PageButton totalPage={data?.totalPages ?? 0}/>
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