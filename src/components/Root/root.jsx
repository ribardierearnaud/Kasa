import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Housing from '../../pages/Housing';
import About from '../../pages/About';
import Error from '../../pages/Lost';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing/:id" element={<Housing />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;