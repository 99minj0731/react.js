import "./Editor.css"
import EmotionItem from "./emotionItem"
import { emotionList } from "../util/constant"
import Button from "./Button"

const Editor = () => {

  const emotionId = 3 // 임시 데이터

  return (
    <div className="Editor">

      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" />
      </section>

      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => 
            <EmotionItem 
              key={item.emotionId} {...item} 
              isSelected={item.emotionId === emotionId}
            />
          )}
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea placeholder="오늘은 어땠나요?"></textarea>
      </section>

      <section className="button_section">
        <Button text={"취소하기"}/>
        <Button text={"작성완료"} type={"POSITIVE"}/>
      </section>
    </div>
  )
}

export default Editor