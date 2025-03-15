import '../css/esub.css'
import { useState } from 'react';
import axios from 'axios'
const EventForm = () => {
  const [Title,setT]=useState("")
  const [Date,setD]=useState("")
  const [Description,setDesc]=useState("")
  const [Category,setP]=useState("")
  const handledetails = (event)=>
  {
    event.preventDefault();  
    axios.post("https://community-calendar-backend.onrender.com/details",{
      Title:Title,
      Date:Date,
      Description:Description,
      Category:Category
  }).then(response=>{
    console.log(response.data);
    if(response.data.isStored)
    {
      setT(""); // Reset Title
      setD(""); // Reset Date
      setDesc(""); // Reset Description
      setP(""); // Reset Category (if applicable)
    }
    else{
      alert("Failed");
    }
  })
  .catch(err=>
  {
    console.error("There was an error updating",err)
  }
  )
  }
  return (
    <form className="eform" onSubmit={handledetails}>
      <h1>Event Submisson</h1>
      <input type="text" value={Title} placeholder="Event Title" onChange={(e)=>{setT(e.target.value)}} />
      <input type="date" value={Date}  onChange={(e)=>{setD(e.target.value)}} />
      <textarea value={Description} placeholder="Description" onChange={(e)=>{setDesc(e.target.value)}} ></textarea>
      <select onChange={(e)=>{setP(e.target.value)}}>
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