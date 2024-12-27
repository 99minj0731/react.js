import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { DiaryDispatchContext, DiaryStateContext } from "../App"
import Header from "../components/Header"
import Button from "../components/Button"
import Editor from "../components/Editor"


const Edit = () => {

  const nav = useNavigate()
  const params = useParams() // params는 현재 몇 번째 일기인지 
  const data = useContext(DiaryStateContext)
  const [curDiaryItem, setCurDiaryItem] = useState()
  // console.log(curDiaryItem)
  
  useEffect(() => {
    const currentDiaryItem = data.find((item) => String(item.id) === String(params.id))
    if(!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.")
      nav('/', {replace:true})
    }
    setCurDiaryItem(currentDiaryItem)
  }, [params.id])


  const {onDelete, onUpdate} = useContext(DiaryDispatchContext)

  const onSubmit = (input) => {
    if(window.confirm("일기를 정말 수정할까요?")){
      onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content )
    }
    nav('/', {replace:true})
  }

  const onClickDelete = () => {
    if(window.confirm("일기를 정말 삭제할까요?")){
      onDelete(params.id)
      nav('/',{replace:true})
    }
  }



  return (
    <div>
      <Header 
        title={"일기 수정하기"}  
        leftChild={
          <Button 
            onClick={() => nav("/")}
            text={"뒤로가기"}
          />
        }
        rightChild={
        <Button 
          onClick={onClickDelete}
          text={"삭제하기"}
        />}
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit}/>  
    </div>
  )
}

export default Edit 