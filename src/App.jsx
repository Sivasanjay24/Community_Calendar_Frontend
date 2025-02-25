import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Bell from './components/notification'
import Calendar from './components/calender'
import Admin from './components/a-dash'
import User from './components/u-dash'
import EventCard from './components/eventcard'
import EventDetails from './components/eventdetails'
import EventSub from './components/eventsubmission'
import Map from './components/map'
import Search from './components/search'
import Navbar from './components/navbar'
function App() {
  return (
    <>
    {/* <Bell/>
    <Calendar/>
    <EventCard/>
    <EventDetails/>
    <EventSub/>
    <Map/>
    <Navbar/>
    <Search/>
    <User/> */}
    <BrowserRouter>
    <Navbar/>
    <Admin/>
    <User/>
    <Calendar/>
    <Map/>
    <Search/>


    <Routes>
      <Route path='/calendar' element={<Calendar/>}/>
      {/* <Route path='/notification' element={<Bell/>}/> */}
      <Route path='/a-dash' element={<Admin/>}/>
      <Route path='/u-dash' element={<User/>}/>
      <Route path='/eventcard' element={<EventCard/>}/>
      <Route path='/eventdetails' element={<EventDetails/>}/>
      <Route path='/eventsubmission' element={<EventSub/>}/>
      <Route path='/map' element={<Map/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
