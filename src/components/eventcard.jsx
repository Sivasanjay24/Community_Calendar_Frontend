const EventCard = ({ event }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition">
      <h2 className="text-xl font-semibold">{event.title}</h2>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <a href={`/event/${event.id}`} className="text-blue-500 hover:underline">View Details</a>
    </div>
  );
};

export default EventCard;