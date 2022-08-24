import React from 'react'
import {Link} from 'react-router-dom'
import './styles/landing.css'

function Landing() {
  return (
    <div className='bghome'>
      <div className="tagline">
        <h1> Welcome to Perfect Products </h1>
      </div>
      <div className="start">
        <Link to="/login"> 
        <button className='startbtn'>
             <h1> Buy Products!  </h1>  
             </button>  
        </Link>
      </div>
    </div>
  )
}

export default Landing