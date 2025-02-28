
import Home from './components/home'
import Navbar from './components/navbar'
import Events from './components/events'
import EventSub from './components/eventsubmission'
import { useRef } from 'react';
import Footer from './components/footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/eventsub' element={<EventSub/>}/>
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  )     
  
}

export default App