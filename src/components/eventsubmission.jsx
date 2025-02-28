import '../css/esub.css'
const EventForm = () => {
  return (
    <form className="eform">
      <h1>Event Submisson</h1>
      <input type="text" placeholder="Event Title"  />
      <input type="date"  />
      <textarea placeholder="Description" ></textarea>
      <button type="submit">Submit Event</button>
    </form>
  );
};

export default EventForm