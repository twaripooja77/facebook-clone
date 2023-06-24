import React from 'react'
import './rightbar.scss'
import Rightbarhome from '../rightbarHome/Rightbarhome'
import ProfileRightBar from '../profilerightbar/ProfileRightBar'

const Rightbar = ({ profile }) => {
  return (
    <div className="rightbar">
    <div className="rightbarWrapper">
      {profile ? <ProfileRightBar /> : <Rightbarhome />}
    </div>
  </div>
  )
}

export default Rightbar
