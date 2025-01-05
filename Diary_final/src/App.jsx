import './App.css'
import { Route, Routes} from 'react-router-dom'
import { useReducer, useRef, createContext } from 'react'

import Diary from './pages/Diary.jsx'
import Home from './pages/Home.jsx'
import New from './pages/New.jsx'
import Edit from './pages/Edit.jsx'
import NotFound from './pages/NotFound.jsx'

const mockData = [
  {
    id:1, 
    createdDate: new Date("2025-01-05").getTime(),
    emotionId:1,
    content:"1번 일기 내용",
  },
  {
    id:2,
    createdDate: new Date("2024-12-25").getTime(),
    emotionId:2,
    content:"2번 일기 내용",
  },
  {
    id:2,
    createdDate: new Date("2025-01-18").getTime(),
    emotionId:3,
    content:"3번 일기 내용",
  },
]

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE' :
      return [action.data, ...state]
    case 'UPDATE' :
      return state.map((item) => 
        String(item.id) === String(action.data.id)
      ? action.data // id가 일치하는는 것은 변경한 것으로 
      : item )      // id가 다르다면 원래데이터로 
    case 'DELETE' :
      return state.filter((item) => 
        {String(item.id) !== String(action.id)}
      )
      default :
        return state
    }
  }
  
  export const DiaryStateContext = createContext()     // 읽기 전용
  export const DiaryDispatchContext = createContext()  //수정 전용

function App() {

  const [data, dispatch] = useReducer(reducer,mockData)

  const idRef = useRef(4)

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type:"CREATE",
      data:{
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      }
    })
  }

  const onUpdate = (id, createdData, emotionId, content) => {
    dispatch({
      type:"UPDATE",
      data:{
        id,
        createdData, 
        emotionId,
        content
      }
    })
  }
  
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id
    })
  }

  return (
    <>
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}} >
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/diary/:id' element={<Diary/>}/>
          <Route path='/new' element={<New/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider> 
    </>
  )
}

export default App
