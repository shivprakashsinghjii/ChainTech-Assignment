import React, { useState } from "react";
import "./project.css";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import firebase from "./firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, pass);
      if (user) {
        navigate("/account");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="main_container_signup">
        <div className="header">
          <h2>Signin</h2>
        </div>

        <div className="box">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="box">
          <input
            type="password"
            value={pass}
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          ></input>
        </div>
        <p>
          Don't Have an Account<Link to="/">Create Account </Link>
        </p>
        <button onClick={submit}>Login</button>
      </div>
    </>
  );
};

export default Login;
