import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './main.css'
import { Provider } from 'react-redux';
import store from './store/store';
import Login from './components/Login'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Products from './components/Products'
import Cart from './components/Cart'

function Main() {
    return (

        <>
            <nav className='nav'>
                <Link to="/"> <h5> <i className="fa-solid fa-house-chimney-window"></i> </h5>  </Link>
                <Link to="/login">  <h5> Login </h5>  </Link>
                <Link to="/products">  <h5> Products </h5>  </Link>
                <Link to="/cart">  <h5>  <i class="fa-solid fa-cart-arrow-down"></i> </h5></Link>
            </nav>
           
            <i class=""></i>
            <Provider store={store}>

            <Routes>
                <Route path="/" element={<Landing></Landing>} /> 
                <Route path="/login" element={<Login></Login>} />
                <Route path="/products" element={<Products></Products>} />
                <Route path="/cart" element={<Cart></Cart>} />
            </Routes>
            </Provider>
            <Footer></Footer>
        </>

    )
}

export default Main