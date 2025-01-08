import { useParams } from "react-router-dom"
import Viewer from "../components/Viewer"
import Header from "../components/Header"
import Button from "../components/Button"

const Diary = () => {

  const params = useParams()

  return (
    <div>
      <Header title={"2024-02-08"} leftChild={<Button text={"< 뒤로가기"} />} rightChild={<Button text={"수정하기"} />}/>
      <Viewer />
    </div>
  )
}

export default Diary