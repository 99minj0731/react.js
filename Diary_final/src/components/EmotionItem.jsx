import "./EmotionItem.css"
import {getEmotionImg} from "../utils/get-emotion-image"



const EmotionItem = ({emotionId, emotionName, isSelected, onClick}) => {

  return (
    <div onClick={onClick} className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}>
      <img className="emotion_img" src={getEmotionImg(emotionId)} />
      <div className="emotion_nam">
        {emotionName}
      </div>
    </div>
  )
}

export default EmotionItem