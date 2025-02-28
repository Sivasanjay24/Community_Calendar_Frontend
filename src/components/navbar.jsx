import { useState } from 'react';
import {Link} from 'react-router-dom'
import '../css/navbar.css'
import Search from './search'
import Home from './home'
const Navbar = () => {
  var [dd,showdd] =useState(false)
  return (
    <div className='navbar'>
      <h1>Community Calendar</h1>
    <Link className="navcon" to='/'>Home</Link>
    <div onClick={()=>showdd(!dd)} className="navcon">search🔎</div>
    <Link className="navcon" to='/events'>Events</Link>
    <div className="navcon">Profile</div>
    {dd && <Search/>}
    </div>
    
  );
};

export default Navbar;