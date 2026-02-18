import { KeyboardCard } from "@/components/KeyboardCard";
import { Sidebar } from "@/components/Sidebar";
import { useKeyboards } from "@/hooks/useKeyboard";
import { theme } from "@/tokens/theme";
import styled from "@emotion/styled";

export const CatalogPage = () => {
  const { data } = useKeyboards();

  // 데이터를 불러오는 훅
  // env에 비밀 정보를 넣어두고, github에는 secret에 정보를 넣어둔다.
  return (
    <>
      {/* 사이드바 필터 */}
      <Sidebar />
      {/* 본문 */}
      <HomepageContainer>
        <div className="grid place-items-center grid-cols-3 gap-5 min-w-fit">
          {data?.map((keyboard) => {
            return (
              <KeyboardCard
                key={keyboard.id}
                title={keyboard.name}
                imageUrl={keyboard.image_url}
                discription={keyboard.description}
                linkUrl={keyboard.github_url}
              />
            );
          })}
        </div>
      </HomepageContainer>
    </>
  );
};

const HomepageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px;
  background-color: ${theme.colors.background};
`