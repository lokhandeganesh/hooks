import React, { createContext, useState, useContext } from 'react'
import NavLinks from './NavLinks'

export const NavbarContext = createContext();

// Custom Hook
export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: 'Ganesh' });

  const logout = () => {
    setUser(null);
  }

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className='navbar'>
        <h5>Context API</h5>
        <NavLinks ></NavLinks>
      </nav>
    </NavbarContext.Provider>
  )
}

export default Navbar