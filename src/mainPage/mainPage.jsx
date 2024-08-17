import React from 'react'
import './mainPage.css'
import ieeeINNER from '../assets/ieee-inner-shell.png'
import ieeeOUTER from '../assets/ieee-outer-shell.png'
import college from '../assets/collegeImage.jpeg'
export default function MainPage() {
  return (
    <div className='main-parent-div'>
      <div className="ieee-background-image-div">
            <img src={ieeeINNER} alt="" />
            <img src={ieeeOUTER} alt="" className='animating-image'/>
      </div>
      <div className="sticky-outer-layer-blur">
            <h1>ieee ictest<br/>Model engineering college</h1>
            <div className="college-video-preview">
                  <img src={college} alt="" />
            </div>
      </div>
    </div>
  )
}
