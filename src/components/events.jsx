import "../css/event.css";
import { Link } from "react-router-dom";

const EventForm = () => {
  return (
    <div className="events">
      <h1 className="hp">Events</h1>
      <div className="grid">
        <div class="card">
          <img className="imgp" src="/conc.jpg" alt="Avatar"></img>
          <div class="container">
            <h4>
              <b>Concert</b>
            </h4>
            <p className="des">
              This is a local music concert arranged by the local government
              college
            </p>
          </div>
        </div>
        <div class="card">
          <img className="imgp" src="/fm..jpg" alt="Avatar"></img>
          <div class="container">
            <h4>
              <b> Big Fish Market</b>
            </h4>
            <p className="des">
              Fishman and Vendors organised a big fish market(10/03/25)
            </p>
          </div>
        </div>
        <div class="card">
          <img className="imgp" src="/temp1.jpg" alt="Avatar"></img>
          <div class="container">
            <h4>
              <b>Yearly village festival</b>
            </h4>
            <p className="des">
              The famous amman temple's refurbishing and ritual ceremonies
            </p>
          </div>
        </div>
        <div class="card">
          <img className="imgp" src="/dcon.jpg" alt="Avatar"></img>
          <div class="container">
            <h4>
              <b>Concert</b>
            </h4>
            <p className="des">Dance concert and competition by prabudeva</p>
          </div>
        </div>
        <div class="card">
          <img className="imgp" src="/temp2.jpg" alt="Avatar"></img>
          <div class="container">
            <h4>
              <b>Yearly village festival</b>
            </h4>
            <p className="des">
              The famous amman temple's refurbishing and ritual ceremonies
            </p>
          </div>
        </div>
        <div class="card">
          <img className="imgp" src="/camp.jpg" alt="Avatar"></img>
          <div class="container">
            <h4>
              <b>Campaign</b>
            </h4>
            <p className="des">
              Campaign conducted by government for student development{" "}
            </p>
          </div>
        </div>
      </div>
      <center><Link className="navcon" to='/eventsub'><button>Submit Events</button></Link></center>
    </div>
  );
};

export default EventForm;
