import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './views/home/Home';
import About from './views/About/About';

const Approutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='about-us' element={<Navigate to='/about' />} />
      </Route>
    </Routes>
  );
};

export default Approutes;
