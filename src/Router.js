import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import cookie from "cookie";
import Home from "./components/Home";
import About from "./components/About";
import Car from "./components/Car";
import Login from "./components/Login";

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
  return cookie.parse(document.cookie).loggedIn;
};
// Write ProtectedRoute function here
const ProtectedRoute = (props) => {
  const { component: Component } = props;

  console.log(checkAuth());

  return checkAuth() ? <Component /> : <Navigate to="/login" />
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute component={Home} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<ProtectedRoute component={About} />} />
      <Route path="/car/:id" element={<ProtectedRoute component={Car} />} />
    </Routes>
  );
};

export default Router;
