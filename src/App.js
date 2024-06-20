import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./components/UI/Pages/Home/Home";
import Header from "./components/UI/Pages/Header/Header";
import Login from "./components/UI/Pages/Login/Login";
import Register from "./components/UI/Pages/Register/Register";
import Carddata from "./components/UI/Pages/Carddata/Carddata";
import Footer from "./components/UI/Pages/Footer/Footer";



const PrivateRoute = ({ element, isAuthenticated, redirectTo }) => {
  return isAuthenticated ? element : <Navigate to={redirectTo} />;
};

const PublicRoute = ({ element, isAuthenticated, redirectTo }) => {
  return !isAuthenticated ? element : <Navigate to={redirectTo} />;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("login");
    if (loginStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("login", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("login", "false");
  };

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/gallery"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={<Carddata />}
              redirectTo="/login"
            />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute
              isAuthenticated={isAuthenticated}
              element={<Login onLogin={handleLogin} />}
              redirectTo="/"
            />
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute
              isAuthenticated={isAuthenticated}
              element={<Register />}
              redirectTo="/"
            />
          }
        />
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/" : "/login"} />}
        />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
