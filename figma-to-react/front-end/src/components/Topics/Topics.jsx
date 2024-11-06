import React, { useState } from 'react'
import "./Topics.css"
import { topicFrequencies, topicDaw, topicVocals, topicMixing, topicConsole, topicMastering, bgElementYellow } from "../../assets"

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(topicFrequencies)
  return (
    <section id='topics' className='bg-black'>
      <div className="wrapper">
        <h2 >What will you learn?</h2>
        <div className="content-container">
          <ul className='topics-list'>
            <li onMouseEnter={() => setCurrentImage(topicFrequencies)}>What are frequencies?</li>
            <li onMouseEnter={() => setCurrentImage(topicDaw)} >Using DAW</li>
            <li onMouseEnter={() => setCurrentImage(topicVocals)} >Vocals Processing</li>
            <li onMouseEnter={() => setCurrentImage(topicMixing)} >Mixing</li>
            <li onMouseEnter={() => setCurrentImage(topicConsole)} >Mixing Console</li>
            <li onMouseEnter={() => setCurrentImage(topicMastering)} >Mastering</li>
          </ul>
          <div className="topic-image">
            <img src={currentImage} alt="" />
          </div>
          <img src={bgElementYellow} className='bg-element-yellow' alt="" />
        </div>
      </div>
    </section>
  )
}

export default Topics