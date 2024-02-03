import React, { useState } from "react";
import "./project.css";
import { Link, useNavigate } from "react-router-dom";
import firebase from "./firebaseConfig";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass);
      if (user) {
        alert("Account Created Successfully");
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="main_container_signup">
        <div className="header">
          <h2>Signup</h2>
        </div>
        <div className="box">
          <input
            type="text"
            value={name}
            placeholder="UserName"
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
        </div>
        <div className="box">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <div className="box">
          <input
            type="password"
            value={pass}
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
            required
          ></input>
        </div>
        <p>
          Already Have an account <Link to="/login">login Now</Link>
        </p>
        <button onClick={submit}>
          <Link to="/login">Signup</Link>
        </button>
      </div>
    </>
  );
};
export default Signup;
