import { KeyboardCard } from './components/KeyboardCard'
import { useKeyboards } from './hooks/useKeyboard'
function App() {

  const { data } = useKeyboards()

  // 데이터를 불러오는 훅
  // env에 비밀 정보를 넣어두고, github에는 secret에 정보를 넣어둔다.
  return (
    <>
      {/* 사이드바 필터 */}
      {/* 본문 */}
      <div className='grid grid-cols-3 gap-5 w-fit'>
        {data?.map((keyboard) => {
          return ( 
          <KeyboardCard
          key={keyboard.id}
          title = {keyboard.name}
          imageUrl={keyboard.image_url}
          discription={keyboard.description}
          linkUrl={keyboard.github_url}
          />)
        })}
      </div>
    </>
  )
}

export default App
