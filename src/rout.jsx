import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './views/home/Home';
import About from './views/About/About';
import Adminhome from './views/AdminHome/AdminHome';
import Userhome from './views/userHome/Userhome';
import RequerAuth from './components/RequerAuth/RequerAuth';

const Approutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='about-us' element={<Navigate to='/about' />} />
        <Route
          path='Admin'
          element={
            <RequerAuth>
              <Adminhome />
            </RequerAuth>
          }
        />
        <Route path='user' element={<Userhome />} />
      </Route>
    </Routes>
  );
};

export default Approutes;
