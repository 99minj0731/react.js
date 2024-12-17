import "./Editor.css"
import { useState, useRef } from "react"

const Editor =  ({onCreate}) => {
  
  const [content, setContent] = useState("")

  const contentRef = useRef()

  const onSubmit = () => {
    if(content === "") {
      contentRef.current.focus()
      return
    }
    onCreate(content)
    setContent("")
  }

  const onChangeContent = (e) => {
    setContent(e.target.value) // 현재 사용자가 입력하는 것 
  }

  const onKeyDown = (e) => {
    // console.log(e)
    if(e.keyCode === 13)
      onSubmit()
  }

  return (
  <div className="Editor">
    <input 
    onKeyDown={onKeyDown}
    ref={contentRef}
    value={content}
    onChange={onChangeContent}
    placeholder="새로운 Todo..." 
    />
    <button onClick={onSubmit}>추가</button>
  </div>)
}

export default Editor