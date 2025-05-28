import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Views/Login';
import Home from '../Views/Home';

function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
