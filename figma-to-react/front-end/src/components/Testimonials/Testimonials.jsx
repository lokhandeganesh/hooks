import React from 'react'
import "./Testimonials.css"
import { testimonialsEmily, testimonialsRobert, testimonialsPeter, } from "../../assets"

const Testimonials = () => {
  return (
    <section id='testimonials' className='bg-dark-color'>
      <div className="wrapper">
        <h2>
          What our students say?
        </h2>
        <div className="content-container">
          <div className="testimonial">
            <img src={testimonialsPeter} alt="" />
            <div className='reviewer-details'>
              <div className="name">Peter Adams</div>
              <div className="company-name">Google</div>
              <div className="review">This is a great course. I got to learn a lot.</div>
            </div>
          </div>
          <div className="testimonial">
            <img src={testimonialsRobert} alt="" />
            <div className='reviewer-details'>
              <div className="name">Robert Fox</div>
              <div className="company-name">Instagram</div>
              <div className="review">I got to learn a lot about Music Production with this course. Thanks :)</div>
            </div>
          </div>
          <div className="testimonial">
            <img src={testimonialsEmily} alt="" />
            <div className='reviewer-details'>
              <div className="name">Emily Smith</div>
              <div className="company-name">Apple</div>
              <div className="review">Awesome! Great job!!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials