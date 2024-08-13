import React from 'react'
import { useAppContext } from './Navbar';

const UserContainer = () => {
  const { user, logout } = useAppContext();

  return (
    <section>
      <div className='user-container'>
        {
          user ?
            <React.Fragment>
              <p>Hello there, {user?.name?.toUpperCase()}</p>
              <button className='btn' onClick={logout}>Logout</button>
            </React.Fragment>
            :
            <p>Please Login</p>
        }
      </div>
    </section>
  )
}

export default UserContainer