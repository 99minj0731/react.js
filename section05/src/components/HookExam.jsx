// 3가지 Hook 관련된 팁


// 1. 함수 컴포넌트, 커스컴 훅 내부에서만 호출 가능
import { useState } from "react"
import useInput from "./../hooks/useinput"

const HookExam = () => {
  const state = useState()
  return <div>HookExam</div>
}

export default HookExam

// 2. 조건부로 호출될 수는 없다.
// const HookExam_1 = () => {
//   if(true) {
//     const state = useState()
//   }
//   for(;;) {
//     //
//   }
//   return <div>HookExam</div>
// }

// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.
// 함수 이름 앞을 use라고 하면 됨

// 커스텀 훅 만들기 -> 다른Hook 파일로 이동
// function useInput() {
//     const [input, setInput] = useState("")
  
//     const onChange = (e) => {
//       setInput(e.target.value)
//     }
  
//     return [input, onChange]
//   }

const HookExam_2 = () => {

  const [input, onChange] = useInput()

  return (
  <div>
    <input value={input} onChange={onchange}/>
  </div>
  )
}