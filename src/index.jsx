import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './style/app.scss';
import AppRoutes from './components/Root/root';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  </React.StrictMode>
);