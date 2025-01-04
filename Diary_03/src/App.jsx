import './App.css'
import {Routes, Route} from 'react-router-dom'
import { useReducer, createContext, useRef } from 'react'

import Home from './pages/Home'
import Edit from './pages/Edit'
import Diary from './pages/Diary'
import NotFound from './pages/NotFound'
import New from './pages/New'

const mockData = [
  {
    id:1, 
    createdDate: new Date("2025-01-29").getTime(),
    emotionId:1,
    content: "1번 일기 내용"
  },
  {
    id:2, 
    createdDate: new Date("2025-01-10").getTime(),
    emotionId:3,
    content: "2번 일기 내용"
  },
  {
  id:3, 
  createdDate: new Date("2024-12-10").getTime(),
  emotionId:3,
  content: "3번 일기 내용"
  },
]

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE' :
      return [action.data, ...state]
    case 'UPDATE' :
      return state.map((item) => 
        String(item.id) === String(action.data.id)
        ? action.data
        : item  
      )
    case 'DELETE' :
      return state.filter((item) =>
        String(item.id) !== String(action.id))
    default:
      return state
  }
}

export const DiaryStateContext = createContext() //읽기전용
export const DiaryDispatchContext = createContext() //수정, 생성, 삭제용

function App() {

  const [data, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(4)

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type:"CREATE", 
      data: {
        id: idRef.current++,
        createdDate,
        emotionId, 
        content
      }
    })
  }

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId, 
        content
      }
    })
  }

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    })
  }
  // console.log(data)


  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}} >
          <Routes> 
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App