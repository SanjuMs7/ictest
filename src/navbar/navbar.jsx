import React, { useEffect } from 'react'
import './navbar.css'
import mecLogo from '../assets/mecLogo.png'
export default function Navbar() {
  return (
    <div className="navbar">
            <div className="logo-div">
                  <img src={mecLogo} alt="" />
                  <span>ICTEST</span>
            </div>
            <ul>
                  <li><div className='hover-circle'></div>home</li>
                  <li><div className='hover-circle'></div>conference</li>
                  <li><div className='hover-circle'></div>team</li>
                  <li><div className='hover-circle'></div>publication</li>
                  <li><div className='hover-circle'></div>schedules</li>
            </ul>
            <button className='login-btn-li'><div className='hover-circle-loginBtn'></div>Login</button>
    </div>
  )
}