import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputData", input);
    let existingData = JSON.parse(localStorage.getItem("user")) || [];
    existingData.push(input);
    localStorage.setItem("user", JSON.stringify(existingData));
    
    setInput({
      name: "",
      email: "",
      password: "",
    });
    
    localStorage.setItem('login', 'false');
    navigate("/login");
  };

  return (
    <>
      <div
        className="container mt-4"
        style={{
          width: "40%",
          border: "1px solid gray",
          padding: "20px 40px",
          borderRadius: "10px",
        }}
      >
        <h3 className="text-center mb-2">Create An Account</h3>
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                name="name"
                value={input.name}
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                name="email"
                value={input.email}
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
                type="email"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
