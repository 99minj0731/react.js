import Header from "./../components/Header"
import Button from "./../components/Button"
import DiaryList from "../components/DiaryList"
import { useState, useContext } from "react"
import { DiaryStateContext } from "../App"

const Home = () => {

  const data = useContext(DiaryStateContext)
  // console.log(data)

  const [pivotDate, setPivotDate] = useState(new Date())

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() +1 ))
  }
  const onDecreadeMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() -1))
  }

  const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime()
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() +1, 0, 23, 59, 59).getTime()
    return data.filter((item) =>
      beginTime <= item.createdDate && item.createdDate <=endTime
    )

  }

  const monthlyData = getMonthlyData(pivotDate, data)

  return (
    <div>
      <Header 
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}  
        leftChild={<Button onClick={onDecreadeMonth} text={"<"}/> }
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData}/>
    </div>
  )
}

export default Home