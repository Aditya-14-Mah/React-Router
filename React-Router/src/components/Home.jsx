// src/components/Home.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <div className="flex flex-col justify-center items-center h-full bg-blue-500">
      <h1 className="text-white text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      {isAuthenticated ? (
        <>
          <p className="text-white mb-4">You are logged in.</p>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <p className="text-white mb-4">You are not logged in.</p>
          <button
            onClick={login}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
