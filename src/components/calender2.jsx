import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import '../css/Calendar.css';

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null); 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://community-calendar-backend.onrender.com/details');
        console.log('Fetched events:', response.data); 

        const formattedEvents = response.data.map(event => ({
          title: event.Title,       
          start: event.Date,       
          description: event.Description, 
          category: event.Category,       
          id: event._id,                  
        }));

        console.log('Formatted events:', formattedEvents); 
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        events={events} 
        eventClick={handleEventClick}
      />

      {selectedEvent && (
        <div className="event-details-box">
          <h2>{selectedEvent.title}</h2>
          <hr></hr>
          <p><strong>Date:</strong> {selectedEvent.start.toLocaleString()}</p>
          <p><strong>Description:</strong> {selectedEvent.extendedProps.description}</p>
          <p><strong>Category:</strong> {selectedEvent.extendedProps.category}</p>
          <button onClick={() => setSelectedEvent(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;