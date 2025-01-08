import "./Viewer.css"
import { getEmotionImg } from "../utils/get-emotion-image"
import { emotionList } from "../utils/constants"

const Viewer = () => {

  const emotionId = 4

  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  )

  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 일기</h4>
        <div>
          <img src={getEmotionImg(emotionId)}/>
          <div>
            {emotionItem.emotionName}
          </div>
        </div>
      </section>
      <section className="content_section"></section>
    </div>
  )
}

export default Viewer