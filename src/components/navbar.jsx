import { useState } from 'react';
import '../css/navbar.css'
import Search from './search'
import Home from './home'
const Navbar = () => {
  var [dd,showdd] =useState(false)
  return (
    <div>
    <div className='navbar'>
      <h1>Community Calendar</h1>
    <div className="navcon">Home</div>
    <div onClick={()=>showdd(!dd)} className="navcon">search🔎</div>
    <div className="navcon" id="eve">Events</div>
    <div className="navcon">My events</div>
    <div className="navcon">Profile</div>
    {dd && <Search/>}
    </div>
   
    </div>
    
  );
};

export default Navbar;