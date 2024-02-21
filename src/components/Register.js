import React from 'react'
import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
    <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <Link to='/'>
        <button className="loginButton">Login</button>

        </Link>
      </form>

      <Link to='/register'>
        <button className="loginRegisterButton">Register</button>
        </Link>
 
    </div>
  )
}