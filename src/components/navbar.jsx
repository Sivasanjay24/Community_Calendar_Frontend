const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="text-2xl font-bold">Community Calendar</h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-gray-200">Home</a>
        <a href="/events" className="hover:text-gray-200">Events</a>
        <a href="/submit" className="hover:text-gray-200">Submit Event</a>
        <a href="/dashboard" className="hover:text-gray-200">Dashboard</a>
      </div>
    </nav>
  );
};

export default Navbar;