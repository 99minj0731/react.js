// 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국정
// 4. 자기소개
import { useRef, useState, useref } from "react"

const Register = () => {

  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  })

  const countRef = useRef(0)
  const inputRef = useRef()
  
  const onChange = (e) => {
    countRef.current++
    console.log(countRef.current)
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = () => {
    if(input.name === "") {
      // 이름을 입력하는 DOM 요소에 포커스
      inputRef.current.focus()
    }
  }
  return (

    <div>


    <div>
      <input 
        ref = {inputRef}
        name="name"
        value={input.name} 
        onChange={onChange} 
        placeholder={"이름"} />
    </div>
  
    <div>  
      <input 
      name= "birth"
      value={input.birth}
      onChange={onChange} 
      type="date" />
    </div>

    <div>
      <select 
        name= "country"
        value={input.country} 
        onChange={onChange}>
        <option></option>
        <option value="Korea">한국</option>
        <option>영국</option>
        <option>미국</option>
      </select>
    </div>

    <div>
      <textarea 
        name="bio" 
        value={input.bio} 
        onChange={onChange}/>
    </div>

    <button onClick={onSubmit}>제출</button>
  </div>
  )
}

export default Register

// const [name, setName] = useState("이름")
// const [birth, setBirth] = useState("")
// const [country, setCountry] = useState("")
// const [bio, setBio] = useState("")

// const onChangeName = (e) => {
//   setName(e.target.value)
// }
// const onChangeBirth = (e) => {
//   setBirth(e.target.value)
// }
// const onChangeCountry = (e) => {
//   setCountry(e.target.value)
// }
// const onChangeBio =  (e) => {
//   setBio(e.target.value)
// }

// const onChangeName = (e) => {
//   setInput({
//     ...input,
//     name: e.target.value
//   })
// }
// const onChangeBirth = (e) => {
//   setInput({
//     ...input,
//     birth: e.target.value
//   })
// }  
// const onChangeCountry = (e) => {
//   setInput({
//     ...input,
//     country: e.target.value
//   })
// }  
// const onChangeBio = (e) => {
//   setInput({
//     ...input,
//     bio: e.target.value
//   })
// }