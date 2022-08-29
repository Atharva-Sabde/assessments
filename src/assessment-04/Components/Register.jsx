import React from 'react'

function Register() {
  return (
    <div className="container">
        <label> Register </label>
        <input type='text' placeholder='Create UserName'>
        </input>
        <input type='password' placeholder='Create Password'>
        </input>
        <input type='password' placeholder='Retype Password'>
        </input>
        <button> Register </button>
    </div>
  )
}

export default Register