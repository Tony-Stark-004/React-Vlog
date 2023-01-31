import Sidebar from '../../Sidebar/Sidebar'
import profilePicture from '../../../Assests/ProfileImage.jpg'
import './Setting.css'

const Setting = () => {
  return (
    <>
      <div className="setting">

        <div className="settingWrapper">
          <div className="settingTitle">
            <span className="settingUpdateTitle">Update Your Account</span>
            <span className="settingDeleteTitle">Delete Account</span>
          </div>

          <form className="settingForm">

            <label htmlFor="">Profile Picture</label>
              <div className="settingPP">
                <img src={profilePicture} alt="profile-img" />
                <label htmlFor="fileInput">
                  <i class="settingPPIcon fa-regular fa-circle-user"></i>
                  <input type="file" id='fileInput' style={{display:'none'}} />
                </label>
              </div>
            <label>Username</label>
            
            <input type="text" placeholder='Aditya'/>
            <label>Email</label>
            <input type="email" placeholder='aditya@gmail.com'/>
            <label>Password</label>
            <input type="password" />
            <button className="settingSubmit">Update</button>
          </form>
        </div>
        <Sidebar /> 
      </div>
    </>
  )
}

export default Setting