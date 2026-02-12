import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { KeyboardCard } from './components/KeyboardCard'
import { useKeyboards } from './hooks/useKeyboard'
function App() {
  const [count, setCount] = useState(0)

  const exampleData = useRef(
    [1,2,3,4,5,6,7,8,9,10,11]
  )
  const { data } = useKeyboards()

  console.log(data)
  // 데이터를 불러오는 훅
  // env에 비밀 정보를 넣어두고, github에는 secret에 정보를 넣어둔다.
  return (
    <>
      {/* 사이드바 필터 */}
      {/* 본문 */}
      <div className='grid grid-cols-3 gap-5 w-fit'>
        {data?.map((keyboard, i) => {
          console.log(keyboard.image_url)
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
