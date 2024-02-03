import React from "react";
import { useNavigate } from "react-router-dom";
import "./project.css";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <p>ERROR 404</p>
      <button onClick={() => navigate("/login")}>Back to Login</button>
    </div>
  );
};

export default Error404;
