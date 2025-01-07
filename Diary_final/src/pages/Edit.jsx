import Header from '../components/Header'
import Button from '../components/Button'
import Editor from '../components/Editor'

import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'

const Edit = () => {
  
  const params = useParams()
  const nav = useNavigate()

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() =>nav(-1)} text={"< 뒤로가기"} />} 
        rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} />}
      />
      <Editor />
    </div>
  )
}

export default Edit