import '../css/esub.css'
import { useState } from 'react';
const EventForm = () => {
  
  return (
    <form className="eform">
      <h1>Event Submisson</h1>
      <input type="text" placeholder="Event Title"  />
      <input type="date"  />
      <textarea placeholder="Description" ></textarea>
      <select>
        <option>Meeting</option>
        <option>Music</option>
        <option>Sports</option>
        <option>Festival</option>
        <option>Market</option>
      </select>
      <button type="submit">Submit Event</button>
    </form>
  );
};

export default EventForm