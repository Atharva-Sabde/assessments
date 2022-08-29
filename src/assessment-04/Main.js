import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AdminLogin from './Components/AdminLogin'
import Dashboard from './Components/Dashboard'
import Landing from './Components/Landing'
import Login from './Components/Login'
import Register from './Components/Register'
import Footer from './Components/Footer'
import './main.css'


function Main() {
    return (
        <>
            <nav className='nav'>
                <Link to="/"> <h5> <i className="fa-solid fa-house-chimney-window"></i> </h5>  </Link>
                <Link to="/register">  <h5> register </h5>  </Link>
                <Link to="/login">  <h5> Login </h5>  </Link>
                <Link to="/admin-login">  <h5>Admin</h5> </Link>
                {/* <Link to="/dashboard">  Dashboard </Link> */}
            </nav>



            <Routes>
                <Route path="/" element={<Landing></Landing>} />
                <Route path="/register" element={<Register></Register>} />
                <Route path="/login" element={<Login></Login>} />
                <Route path="/admin-login" element={<AdminLogin></AdminLogin>} />
                <Route path="/dashboard" element={<Dashboard></Dashboard>} />
            </Routes>

            <Footer></Footer>


        </>
    )
}

export default Main