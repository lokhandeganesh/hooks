import React, { useState } from 'react'
import NavLinks from './NavLinks'
import UserContainer from './UserContainer';

const Navbar = () => {
  const [user, setUser] = useState({ name: 'Ganesh' });

  const logout = () => {
    setUser(null);
  }

  return (
    <nav className='navbar'>
      <h5>Context API</h5>
      <NavLinks user={user} logout={logout}></NavLinks>
    </nav>
  )
}

export default Navbar