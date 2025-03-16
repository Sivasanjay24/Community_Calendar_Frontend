import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [pendingEvents, setPendingEvents] = useState([]);

  useEffect(() => {
    const fetchPendingEvents = async () => {
      try {
        const response = await axios.get('https://community-calendar-backend.onrender.com/details/pending');
        setPendingEvents(response.data);
      } catch (error) {
        console.error('Error fetching pending events:', error);
      }
    };

    fetchPendingEvents();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(`https://community-calendar-backend.onrender.com/details/${id}/approve`);
      setPendingEvents(pendingEvents.filter(event => event._id !== id));
    } catch (error) {
      console.error('Error approving event:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(`https://community-calendar-backend.onrender.com/details/${id}/reject`);
      setPendingEvents(pendingEvents.filter(event => event._id !== id));
    } catch (error) {
      console.error('Error rejecting event:', error);
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Pending Events</h2>
      {pendingEvents.length === 0 ? (
        <p>No pending events.</p>
      ) : (
        <ul>
          {pendingEvents.map(event => (
            <li key={event._id}>
              <h3>{event.Title}</h3>
              <p><strong>Date:</strong> {new Date(event.Date).toLocaleString()}</p>
              <p><strong>Description:</strong> {event.Description}</p>
              <p><strong>Category:</strong> {event.Category}</p>
              <button onClick={() => handleApprove(event._id)}>Approve</button>
              <button onClick={() => handleReject(event._id)}>Reject</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminPanel;