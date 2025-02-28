import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../css/Calendar.css'

function App() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Community Meeting', date: '2025-02-15' },
    { id: 2, title: 'Local Concert', date: '2025-02-20' },
    { id: 3, title: 'Farmers Market', date: '2025-03-02' },
  ]);

  // const handleDateClick = (arg) => {
  //   const title = prompt('Enter event title:');
  //   if (title) {
  //     const newEvent = {
  //       id: events.length + 1,
  //       title: title,
  //       date: arg.dateStr,
  //     };
  //     setEvents([...events, newEvent]);
  //   }
  // };

  // const handleEventClick = (info) => {
  //   if (window.confirm(`Are you sure you want to delete "${info.event.title}"?`)) {
  //     const updatedEvents = events.filter((event) => event.id !== Number(info.event.id));
  //     setEvents(updatedEvents);
  //   }
  // };

  return (
    <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          // dateClick={handleDateClick}
          // eventClick={handleEventClick}
          // editable={true}
          selectable={true}
        />

      </div>

  );
}

export default App;