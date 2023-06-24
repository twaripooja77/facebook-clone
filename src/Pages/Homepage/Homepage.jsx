import React from 'react'
import './homepage.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Rightbar from '../../Components/Rightbar/Rightbar'


const Homepage = () => {
  return (
    <div className='homepage'>
      <Navbar/>
      <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </div>
  )
}

export default Homepage
