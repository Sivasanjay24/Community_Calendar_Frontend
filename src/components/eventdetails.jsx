const EventDetails = ({ event }) => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <button className="bg-green-500 text-white p-2 rounded">RSVP</button>
    </div>
  );
};

export default EventDetails