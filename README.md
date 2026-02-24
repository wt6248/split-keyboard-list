split-keyboard-list/

# 프로젝트 설명

https://wt6248.github.io/split-keyboard-list/

이 프로젝트는 원하는 스플릿 키보드를 찾아보는 사이트입니다. 키보드의 특징에 맞춰 필터링이 가능하며, 인기있는 스플릿 키보드를 알아볼 수 있습니다. 주요 필터링 기능으로는 행, 열의 키 갯수와 키보드 타입이 있습니다. 정렬 기능으로는 이름순, 깃헙 별 개수순 정렬이 있습니다.

# 사용 기술 스택 

이 프로젝트에는 다음 기술들이 사용되었습니다.
- react 19.2.0
- typescript
- vite 7.3.1
- supabase
- tanstack query 
- styled component, tailwindcss

# 폴더 구조 

## token, styles 
디자인 토큰을 모와둔 폴더입니다. tailwind.css를 기반으로 하며, 이를 index.css, theme.ts 및 각종 페이지에서 참고합니다.

## api
백엔드(supabase)에서 데이터를 query문으로 요청하는 명령이 작성되어 있는 폴더입니다. 주요 기능으로는 keyboard.ts에서 주어진 파라미터로 필터링, 정렬하는 기능이 있습니다.

## page
### CatalogPage
스플릿 키보드들을 카드로 보여주는 페이지입나다. 사이드바로 필터를 가지고 있으며, 페이지마다 9개의 키보드를 보여줍니다. 

## Layout
Layout 페이지는 헤더와 footer를 담당하는 페이지입니다.

## hooks
### useKeyboard
주어진 파라미터와 쿼리문을 바탕으로 요청을 보내는 커스텀 훅입니다.
### useFilterParams
주소창에 파라미터를 넣고, 조작하기 위해서 필요한 함수들이 모인 커스텀 훅 입니다.

## components
홈페이지에서 사용하는 컴포넌트들이 담긴 폴더입니다. 주된 컴포넌트로 KeyboardCard와 Sidebar가 있습니다.
### KeyboardCard
주어진 키보드 데이터를 카드의 형태로 표현하는 컴포넌트입니다. 
### Sidebar
필터링과 정렬 옵션들을 모와서 사이드바로 보여주는 컴포넌트입니다.