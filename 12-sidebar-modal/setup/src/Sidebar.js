import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { socials, links } from './data'

const Sidebar = () => {
  return (
    <aside className={`sidebar show-sidebar`}>
      <div className="sidebar-header">
        <img src={logo} className='logo' alt="Coding Addict" />
        <button className="close-btn">
          <FaTimes></FaTimes>
        </button>
      </div>
      <ul className='links'>
        {
          links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a href={url}>{icon}{text}</a>
              </li>
            )
          })
        }
      </ul>
      <ul className='social-icons'>
        {
          socials.map((social) => {
            const { id, url, icon } = social;
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          })
        }
      </ul>
    </aside>

  )
}

export default Sidebar
