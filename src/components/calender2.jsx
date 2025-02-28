import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import EventForm from './eventsubmission';
import '../css/Calendar.css'

  const CalendarPage = () => {
    // State to store events
    const [events, setEvents] = useState([]);
  
    // Function to handle form submission
    const handleAddEvent = (newEvent) => {
      setEvents([...events, newEvent]); 
    };
  

  return (
    <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          selectable={true}
        />
      </div>

  );
}

export default CalendarPage;