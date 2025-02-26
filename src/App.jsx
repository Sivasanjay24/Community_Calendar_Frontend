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
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // FullCalendar component
import dayGridPlugin from '@fullcalendar/daygrid'; // Month view plugin
import interactionPlugin from '@fullcalendar/interaction'; // For date clicks and event dragging
// import '@fullcalendar/core/main.css'; // Core styles
// import '@fullcalendar/daygrid/main.css'; // Day grid styles

function App() {
  // State to manage events
  const [events, setEvents] = useState([
    { id: 1, title: 'Community Meeting', date: '2024-10-15' },
    { id: 2, title: 'Local Concert', date: '2024-10-20' },
    { id: 3, title: 'Farmers Market', date: '2024-10-25' },
  ]);

  // Handle adding a new event
  const handleDateClick = (arg) => {
    const title = prompt('Enter event title:'); // Prompt for event title
    if (title) {
      const newEvent = {
        id: events.length + 1, // Generate a unique ID
        title: title,
        date: arg.dateStr, // Use the clicked date
      };
      setEvents([...events, newEvent]); // Add the new event to the list
    }
  };

  // Handle event deletion (optional)
  const handleEventClick = (info) => {
    if (window.confirm(`Are you sure you want to delete "${info.event.title}"?`)) {
      const updatedEvents = events.filter((event) => event.id !== Number(info.event.id));
      setEvents(updatedEvents); // Remove the event from the list
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Community Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]} // Add plugins
        initialView="dayGridMonth" // Default view
        events={events} // Pass events to the calendar
        dateClick={handleDateClick} // Handle date clicks
        eventClick={handleEventClick} // Handle event clicks
        editable={true} // Allow dragging and resizing events
        selectable={true} // Allow selecting dates
      />
    </div>
  );
}

export default App;
