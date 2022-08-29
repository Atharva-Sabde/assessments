import React from 'react'
import {Link} from 'react-router-dom'
import './Styles/landing.css'

function Landing() {
  return (
    <div className='bghome'>
      <div className="tagline">
        <h1> User Dasboard Authentication using MOngoDB </h1>
      </div>
      <div className="start">
        <Link to="/login"> 
        <button className='startbtn'>
             <h1> Start  </h1>  
             </button>  
        </Link>
      </div>
    </div>
  )
}

export default Landing