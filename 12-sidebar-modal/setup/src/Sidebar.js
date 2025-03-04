import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { socials, links } from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  // imported from custom hook
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-header">
        <img src={logo} className='logo' alt="Coding Addict" />
        <button className="close-btn" onClick={closeSidebar}>
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
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })
        }
      </ul>
    </aside>

  )
}

export default Sidebar
