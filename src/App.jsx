import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SingleMoviePage from './pages/SingleMoviePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<SingleMoviePage />} />
      </Routes>
    </Router>
  )
}

export default App
