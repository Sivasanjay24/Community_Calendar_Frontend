const EventForm = () => {
  return (
    <form className="p-6 space-y-4">
      <input type="text" placeholder="Event Title" className="border p-2 w-full" />
      <input type="date" className="border p-2 w-full" />
      <input type="text" placeholder="Location" className="border p-2 w-full" />
      <textarea placeholder="Description" className="border p-2 w-full"></textarea>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Event</button>
    </form>
  );
};

export default EventForm