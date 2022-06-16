import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"


// Write ProtectedRoute function here


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/car/:id" element={<Car/>} />
        </Routes>
    );
};

export default Router;