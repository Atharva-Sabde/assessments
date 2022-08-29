import React from 'react'
import './Styles/login.css'


function Login() {
  return (
    <>
    <div className="container">
        <label> Login </label>
        <input type='text' placeholder='UserName'>
        </input>
        <input type='password' placeholder='Password'>
        </input>
        <button> Login</button>
    </div>
    </>
  )
}

export default Login