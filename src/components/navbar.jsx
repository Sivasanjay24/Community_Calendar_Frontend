import '../css/navbar.css'
import Calendar from 'fullcalendar'
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new Calendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();
});

const Navbar = () => {
  return (
    <div id = "calendar"></div>
  );
};

export default Navbar;