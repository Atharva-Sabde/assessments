import React from 'react'
import './nav.css'

function Nav() {
  return (
    <div className="navbar">
        <div className="logo">
            <i class="fa-brands fa-square-facebook"></i>
        </div>
        <div className='menu-links'>
            <ul>
                <li>
                    <a href='#'> home</a>
                </li>
                <li>
                    <a href='#'> About</a>
                </li>
                <li>
                    <a href='#'> services</a>
                </li>
                <li>
                    <a href='#'> Logout</a>
                </li>
            </ul>
        </div>
       
        <div className="social-media">
            <ul>
                <li><a href='#'></a><i className="fa-solid fa-alicorn"></i></li>
                <li><a href='#'></a><i className="fa-solid fa-alicorn"></i></li>
                <li><a href='#'></a><i className="fa-solid fa-alicorn"></i></li>
            </ul>
        </div>

    </div>
    
  )
}

export default Nav