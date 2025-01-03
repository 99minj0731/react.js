import Header from "../components/Header"
import Button from "../components/Button"
import DiaryList from "../components/DiaryList"


import { useState, useContext } from "react"
import { DiaryStateContext } from "../App"
import usePageTitle from "../hooks/usePageTitle"

const Home = () => {

  usePageTitle('감정 일기장')

  const data = useContext(DiaryStateContext)

  const [pivotDate, setPivotDate] = useState(new Date())

  const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime()
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() +1, 0, 23, 59, 59).getTime()
    return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime )
  }

  const monthlyData = getMonthlyData(pivotDate, data)

  const onIncreasedMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
  }
  const onDecreasedMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() -1 ))
  }

  return <div>
    <Header 
      title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
      leftChild={<Button onClick={onDecreasedMonth} text={"<"}/>}  
      rightChild={<Button onClick={onIncreasedMonth} text={">"}/>}
    />
    <DiaryList data={monthlyData} />
  </div>
}

export default Home