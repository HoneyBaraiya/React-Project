import React,{useContext} from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import {AppContext} from './context'

const Sidebar = () => {
  const {closeSidebar,isOpenSidebar} =useContext(AppContext)
  return (
    <aside className={ ` ${isOpenSidebar?'sidebar show-sidebar':'sidebar'} `}>
      <div className='sidebar-header'>
        <img src={logo} alt="logo"/>
        <button className='close-btn' onClick={closeSidebar}><FaTimes/></button>
      </div>
      <ul className='links'>
        {
          links.map((link)=>{
            const {id,url,text,icon}=link;
            return(
              <li key={id}>
                <a href={url}>{icon}{text}</a>
              </li>
            )
          })
        }
      </ul>
      <ul className='social-icons'>
        {
          social.map((soc)=>{
            const {id,url,icon}=soc;
            return(
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
