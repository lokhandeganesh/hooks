import React, { useEffect, useState } from 'react'
import "./Testimonials.css"
import { testimonialsEmily, testimonialsRobert, testimonialsPeter, } from "../../assets"
import { urlFor, client } from '../../client'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const query = '*[_type == "testimonials"][0..1]';
    client.fetch(query).then((data) => {
      setTestimonials(data);
    })
  }, [])
  return (
    <section id='testimonials' className='bg-dark-color'>
      <div className="wrapper">
        <h2>
          What our students say?
        </h2>
        <div className="content-container">
          {
            testimonials.map((testimonial) => (
              <div className="testimonial">
                <img src={urlFor(testimonial.image)} alt="" />
                <div className='reviewer-details'>
                  <div className="name">{testimonial.name}</div>
                  <div className="company-name">{testimonial.company}</div>
                  <div className="review">{testimonial.message}</div>
                </div>
              </div>
            ))
          }
          <div className="testimonial">
            <img src={testimonialsPeter} alt="" />
            <div className='reviewer-details'>
              <div className="name">Peter Adams</div>
              <div className="company-name">Google</div>
              <div className="review">This is a great course. I got to learn a lot.</div>
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