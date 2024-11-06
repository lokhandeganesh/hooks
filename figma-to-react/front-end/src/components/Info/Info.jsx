import React from 'react'
import "./Info.css"
import { studentIcon, videoIcon, bgElementRed } from "../../assets"

const Info = () => {
  return (
    <section id='info' className='bg-dark-color'>
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={studentIcon} alt="" />
            <div className="amount">23,000+</div>
            <div className="type">Students</div>
          </div>
          <div className="info-content">
            <img src={videoIcon} alt="" />
            <div className="amount">26 Hrs</div>
            <div className="type">Video Content</div>
          </div>
        </div>
        <img src={bgElementRed} className="bgElementRed" alt="" />
      </div>
    </section>
  )
}

export default Info