import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";
import ProtectedRoute from "./Components/ProtectedRoute";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track authentication
  const [userId, setUserId] = useState(null); // State to store logged-in user's ID

  // Check for token in localStorage on app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true); // Set authentication state to true
      // Optionally, fetch the user ID from the token or backend
    }
  }, []);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUserId={setUserId} />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu userId={userId} />} />
          <Route path="/cart" element={<Cart userId={userId} />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;