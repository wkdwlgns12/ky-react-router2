
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './pages/About'
import Board from './pages/Board'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import BoardDetail from './pages/BoardDetail'
function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board/:id' element={<BoardDetail />} />
        <Route path='*' element={<Notfound />} />
      </Routes>

    </div>
  )
}

export default App
