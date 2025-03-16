import '../css/home.css'
import React from 'react'
import Cal from './calender2'
import { Link } from 'react-router-dom'

function home() {
  return (
    <div>
      <h1 className='hometitle'>Events Calendar</h1>
      <Cal/>
      <center><Link className="b" to='/eventsub'><button className='hb'>Submit Events</button></Link></center>
    </div>
  )
}

export default home