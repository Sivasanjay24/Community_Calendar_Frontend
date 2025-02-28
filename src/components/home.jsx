import '../css/home.css'
import React from 'react'
import Cal from './calender2'
import { Calendar } from '@fullcalendar/core/index.js'

function home() {
  return (
    <div>
      <h1 className='hometitle'>Events Calendar</h1>
      <Cal/>
    </div>
  )
}

export default home