import './App.css'
import Diary from './pages/Diary'
import Home from './pages/Home'
import Edit from './pages/Edit'
import New from './pages/New'
import NotFound from './pages/NotFound'
import Button from './components/Button'

import { getEmotionImage } from './util/get-emotion-image'

import { Route, Routes, Link, useNavigate } from 'react-router-dom'

function App() {

  const nav = useNavigate()

  const onclickButton = () => {
    nav('/new')
  }

  return (
    <>
      <Button />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
