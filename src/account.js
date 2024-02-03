import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "./firebaseConfig";

const Account = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dob, setDob] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user) {
      setUserName(user.displayName || "");
      setEmail(user.email || "");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleUpdate = async () => {
    try {
      const user = firebase.auth().currentUser;
      if (user) {
        await user.updateProfile({
          displayName: userName,
        });

        alert("Account information updated successfully");
        setIsEditMode(false);
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      navigate("/login");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="main_container_signup">
      <div className="header">
        <h2>Account Information</h2>
      </div>
      <div className="box">
        <label>Email:</label>
        <input type="text" value={email} disabled />
      </div>
      <div className="box">
        <label>Username:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          disabled={!isEditMode} // Disable input if not in edit mode
        />
      </div>
      <div className="box">
        <label>Mobile Number:</label>
        <input
          type="number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          disabled={!isEditMode}
        />
      </div>
      <div className="box">
        <label>Date of Birth:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          disabled={!isEditMode}
        />
      </div>
      <div className="button-container">
        <button
          onClick={() => {
            setIsEditMode(true);
            alert("Complete your profile");
          }}
        >
          Edit Information
        </button>
      </div>
      <div className="button-container1">
        <button onClick={handleUpdate}>Update Information</button>
      </div>
      <div className="button-container2">
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Account;
