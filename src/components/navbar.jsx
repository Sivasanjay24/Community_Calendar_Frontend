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
    <div onClick={()=>showdd(!dd)} className="navcon">Search</div>
    {/* <Link className="navcon" to='/events'>Events</Link> */}
    <Link className="navcon" to='/admin'>Admin</Link>
    {dd && <Search/>}
    </div>
    
  );
};

export default Navbar;