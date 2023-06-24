import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Rightbar from '../../Components/Rightbar/Rightbar'
import { AuthContext } from '../../context/AuthContext'
import UsersPost from '../../Components/userspost/UsersPost'
import './profile.scss'

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="profile">
    <Navbar />
    <div className="profileWrapper">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              src="/assets/profileCover/profilecover.jpg"
              alt=""
              className="profileCoverImg"
            />
            <img
              src={currentUser.photoURL}
              alt=""
              className="profileUserImg"
            />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">{currentUser.displayName}</h4>
            <span className="profileInfoDesc">Hi Friends!</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <UsersPost />
          <Rightbar profile />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile
