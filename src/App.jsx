import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Event from './pages/event'
import Landing from './pages/landing'
import CreateAcara from "./pages/createacara"; 
import MyEvents from "./pages/myevents"; 
import EditEvent from './pages/EditEvent'; 
import Profile from './pages/profile'; 
import EditProfile from './pages/editprofile';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/event' element={<Event/>}/>
        <Route path='/landing' element={<Event/>}/>
        <Route path='/createacara' element={<CreateAcara/>}/>
         <Route path='/myevents' element={<MyEvents/>}/>
         <Route path="/edit-event/:id" element={<EditEvent />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />

      </Routes>
    </Router>
  )
}

export default App
