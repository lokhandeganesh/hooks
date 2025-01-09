import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, socials } from './data'
import logo from './logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Coding Addict" />
          <button className="nav-toggle">
            <FaBars />
          </button>
          <div className="links-container show-container">
            <ul className="links">
              {
                links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id}>
                      <a href={url}>{text}</a>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
        <ul className="social-icons">
          {
            socials.map((social) => {
              const { id, url, icon } = social;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })
          }
        </ul>
      </div>
    </nav >
  )
}

export default Navbar
