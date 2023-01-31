import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <>
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input className='loginInput' type="email" placeholder='enter email' />
          <label>Password</label>
          <input className='loginInput' type="password" placeholder='enter password' />
          <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton"><Link to='/register' className='link'>Register</Link></button>
      </div>
    </>
  )
}

export default Login