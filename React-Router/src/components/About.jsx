// src/components/About.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div className="p-8 bg-green-500">
      <h1 className="text-white text-4xl font-bold mb-4">About Us</h1>
      <ul className="flex space-x-4 mb-6">
        <li>
          <Link to="team" className="text-white hover:text-gray-200">Team</Link>
        </li>
        <li>
          <Link to="company" className="text-white hover:text-gray-200">Company</Link>
        </li>
      </ul>
      {/* Outlet is used for the purpose of creating nested Routing */}
      <Outlet /> {/*Renders Team or Company*/}
    </div>
  );
};

export default About;
