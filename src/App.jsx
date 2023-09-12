import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SingleMoviePage from './pages/SingleMoviePage'
import { Provider } from 'react-redux'
import { store } from './store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loader from './components/Loader'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<SingleMoviePage />} />
        </Routes>
      </Router>
      <ToastContainer hideProgressBar={true} autoClose={2000} />
      <Loader />
    </Provider>
  )
}

export default App
