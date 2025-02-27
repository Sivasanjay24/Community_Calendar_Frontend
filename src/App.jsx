import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';

function App() {

  const [events, setEvents] = useState([
    { id: 1, title: 'Community Meeting', date: '2024-10-15' },
    { id: 2, title: 'Local Concert', date: '2024-10-20' },
    { id: 3, title: 'Farmers Market', date: '2024-10-25' },
  ]);

  const handleDateClick = (arg) => {
    const title = prompt('Enter event title:'); 
    if (title) {
      const newEvent = {
        id: events.length + 1, 
        title: title,
        date: arg.dateStr, 
      };
      setEvents([...events, newEvent]);
    }
  };

  // const handleEventClick = (info) => {
  //   if (window.confirm(`Are you sure you want to delete "${info.event.title}"?`)) {
  //     const updatedEvents = events.filter((event) => event.id !== Number(info.event.id));
  //     setEvents(updatedEvents);
  //   }
  // };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Community Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth" 
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        editable={true} 
        selectable={true}
      />
    </div>
  );
}

export default App;


/*import './App.css'
// import Home from './components/home'
// import Navbar from './components/navbar'
import Calendar from './components/calender'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
    <Calendar/>
    {/* <BrowserRouter>
    <Home/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/a-dash' element={<Admin/>}/>
      <Route path='/u-dash' element={<User/>}/>
      <Route path='/eventcard' element={<EventCard/>}/>
      <Route path='/eventdetails' element={<EventDetails/>}/>
      <Route path='/eventsubmission' element={<EventSub/>}/>
      <Route path='/map' element={<Map/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
    </Routes>
    </BrowserRouter> */
    /*</div>
  )
}

export default App*/