// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';
import Team from '../components/Team';
import Company from '../components/Company';
import ProtectedRoute from '../components/ProtectedRoute'; // Optional for protected routes

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}>
        <Route path="team" element={<Team />} />
        <Route path="company" element={<Company />} />
      </Route>
      <Route path="/contact" element={
        <ProtectedRoute>
          <Contact />
        </ProtectedRoute>
      } />
      {/* Catch-all route for 404 Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
