import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/app.scss';
import Home from './pages/Home';
import Housing from './pages/Housing';
import About from './pages/About';
import Lost from './pages/Lost';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="*" element={<Lost />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);