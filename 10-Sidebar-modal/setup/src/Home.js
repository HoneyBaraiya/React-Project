import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import {AppContext,AppProvider} from "./context"
const Home = () => {
  const {openSidebar,openModel}=useContext(AppContext);
  
  return (
    <main>
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars/>
      </button>
      <button className='btn' onClick={openModel}>Show model</button>
    </main>
  )
}

export default Home
