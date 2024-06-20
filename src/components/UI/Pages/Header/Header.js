import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{
            position: 'sticky',
            top: '0px',
            left: '0px',
            zIndex: '9999',
            boxShadow: '0px 0px 4px gray',
      }}>
        <div className="container-fluid">
          <Link className="navbar-brand" style={{fontSize:'25px', fontWeight:'bold',  }} to="/">
            Image Gallery
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end mx-4"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/gallery">
                  Gallery
                </Link>
              </li>
              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <button className="nav-link btn btn-link text-dark" onClick={onLogout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-primary" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
