import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import EventForm from './eventsubmission';
import '../css/Calendar.css'

  const CalendarPage = () => {
  

  return (
    <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          // git 
          selectable={true}
        />
      </div>

  );
}

export default CalendarPage;