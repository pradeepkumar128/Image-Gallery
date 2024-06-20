import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const storedData = JSON.parse(localStorage.getItem("user")) || [];
    const user = storedData.find(
      (user) => user.email === input.email && user.password === input.password
    );

    if (input.email === "" && input.password === "") {
      alert("Please fill the form");
    } else {
      if (user) {
        onLogin();
        navigate("/");
        localStorage.setItem("login", true);
      } else {
        alert("User not exist");
      }
    }
  };

  return (
    <div
      className="container mt-4"
      style={{
        width: "40%",
        border: "1px solid gray",
        padding: "30px 40px",
        borderRadius: "10px",
      }}
    >
      <h3 className="text-center mb-2">Login</h3>
      <div className="row">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              
              value={input.email}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              
              value={input.password}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              autoComplete="current-password"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-outline-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
