import './Navbar.css'
import topImage from '../../Assests/topImage.jpeg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const user = true
  return (
    <>
      <div className='top'>
        <div className='top-left'>
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-twitter"></i>
          <i className="topIcon fa-brands fa-square-pinterest"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className='top-center'>
          <ul className="topList">
            <li className="topListItems"><Link to='/' className='link'>Home</Link></li>
            <li className="topListItems"><Link to='/' className='link'>About</Link></li>
            <li className="topListItems"><Link to='/' className='link'>Contact</Link></li>
            <li className="topListItems"><Link to='/write' className='link'>Write</Link></li>
            <li className="topListItems"><Link to='/' className='link'>{user && `Logout`}</Link></li>
          </ul>
        </div>
        <div className='top-right'>
         {
          user?  
          <img className='topImage' src={topImage} alt="" />:
          <>
            <ul className="topList">
              <li className="topListItems"><Link to='/login' className='link'>Login</Link></li>
              <li className="topListItems"> <Link to='/register' className='link'>Register</Link></li>
            </ul>
          </> 
         }
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  )
}

export default Navbar