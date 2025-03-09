import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated, setUserId }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: formData.email,
        password: formData.password,
      });

      alert(response.data.message);
      localStorage.setItem("token", response.data.token); // Save token to localStorage
      setIsAuthenticated(true); // Set authentication state to true
      setUserId(response.data.userId); // Set userId in App component
      navigate("/"); // Redirect to home page
    } catch (error) {
      alert(error.response?.data?.message || "Error logging in");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Login to Zomato</h1>
      <form className="col-md-6 offset-md-3" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>&nbsp;&nbsp;
        <Link to="/signup" className="btn">Don't have an Account ? <u>Sign Up</u></Link>
      </form>
      <br></br>
    </div>
  );
};

export default Login;