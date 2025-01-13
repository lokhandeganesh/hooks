import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './context'


const Home = () => {
  // const data = useContext(AppContext);

  // imported from custom hook
  const data = useGlobalContext();
  console.log(data);

  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars></FaBars>
      </button>
      <button className="btn">
        show modal
      </button>
    </main>
  )
}

export default Home
