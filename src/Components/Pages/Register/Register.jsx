import './Register.css'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <>
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Username</label>
          <input className='registerInput' type="text" placeholder='enter username' />
          <label>Email</label>
          <input className='registerInput' type="email" placeholder='enter email' />
          <label>Password</label>
          <input className='registerInput' type="password" placeholder='enter password' />
          <button className="registerButton">Register</button>
        </form>
        <button className="registerRegisterButton"><Link to='/login' className='link'>Login</Link></button>
      </div>
    </>
  )
}

export default Register