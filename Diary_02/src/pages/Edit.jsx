import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { DiaryDispatchContext, DiaryStateContext } from "../App"
import Header from "../components/Header"
import Button from "../components/Button"
import Editor from "../components/Editor"
import useDiary from "../hooks/useDiary"
import usePageTitle from "../hooks/usePageTitle"

const Edit = () => {  

  
  const nav = useNavigate()
  const params = useParams() // params는 현재 몇 번째 일기인지 
  usePageTitle(`${params.id}번 일기 수정`)
  const curDiaryItem = useDiary(params.id)

  const {onDelete, onUpdate} = useContext(DiaryDispatchContext)

  const onSubmit = (input) => {
    if(window.confirm("일기를 정말 수정할까요?")){
      onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content )
    }
    nav(-1, {replace:true})
  }

  const onClickDelete = () => {
    if(window.confirm("일기를 정말 삭제할까요?")){
      onDelete(params.id)
      nav(-1,{replace:true})
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