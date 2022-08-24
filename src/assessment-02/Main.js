import React from 'react';
import './main.css'
import { BrowserRouter, Link, Routes, Route, Redirect } from 'react-router-dom'

import Home from './Components/Home';
import Book from './Components/Book';
import Login from './Components/Login';

function Main() {
    return (
        <>
            <nav>
                <Link to="/"> <button> Home </button>  </Link>
                <Link to="/login"> <button> login </button>  </Link>
                <Link to="/store"> <button> Store </button>  </Link>
            </nav>


            <Routes>
                <Route path='/' element={<Home />}> </Route>
                <Route path='/login' element={<Login />}> </Route>
                <Route path='/store' element={<Book />}> </Route>
            </Routes>


        </>
    )
}

export default Main;