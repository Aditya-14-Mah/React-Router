import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes"; // Import the routes

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          {/* Routes*/}
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
};

export default App;
