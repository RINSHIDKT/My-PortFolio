import React from 'react'
import './WorkExpence.scss'
// import motion from 'framer-motion'

const Workexprnce = () => {
  return (
    <div className='wrkExperienceMain'>
    <div className="heading">
    <h1>My Work <span>Experience</span></h1>
    </div>
    <div className="expirience">
        <div className="expirience_left">
          <div className="contents">
          <h4>Synnefo Solutions Pvt.ltd</h4>
            <p>June 2023 - January 2024</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="expirience_right">
            <div className="contents">
            <h4>MERN Stack Developer</h4>
            <p>I have successfully completed a 6-month internship with the MERN stack in Synnefo Solutions Pvt.Ltd.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Workexprnce
