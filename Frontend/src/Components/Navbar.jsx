import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setIsAuthenticated(false); // Set authentication state to false
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black text-white">
      <div className="container">
        <Link className="navbar-brand text-secondary" to="/">
          Zomato
        </Link>
        <div className="collapse navbar-collapse">
          {/* <form className="d-flex mx-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for restaurants or dishes"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div className="d-flex d-flex1">
            {isAuthenticated ? (
              <>
                <Link
                  to="/menu"
                  className="text-decoration-none text-warning px-4 pt-2 custom-hover border border-1 border-secondary rounded-2"
                >
                  <h5>Menu</h5>
                </Link>
                &nbsp;&nbsp;
                <Link to="/cart" className="btn btn-outline-primary me-2 position-relative">
                  🛒 Cart
                </Link>
                <button
                  className="btn btn-outline-danger me-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-primary me-2">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-primary">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;