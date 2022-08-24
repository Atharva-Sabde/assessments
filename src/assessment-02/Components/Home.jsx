import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import './Styles/home.css'

import Footer from './Footer'

function Home() {
  return (
    <>

    <div className='bghome'>
      <div className="tagline">
        <h1> Welcome to Big BookStore </h1>
      </div>
      <div className="start">
        <Link to="/login"> <button className='startbtn'> <h1> Start Journey!    </h1>  <h1><i class="fa-solid fa-book"></i> </h1></button>  </Link>
      </div>
    </div>

    <Footer></Footer>

    </>
  )
}

export default Home
