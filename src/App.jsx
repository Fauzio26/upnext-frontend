import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Login} from './pages/login'
import {Register} from './pages/register'
import {Event} from './pages/event'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/event' element={<Event/>}/>
      </Routes>
    </Router>
  )
}

export default App
