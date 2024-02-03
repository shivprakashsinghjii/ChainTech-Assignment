// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyDwnESvGurPkDNzJPpExPrj4j4_T9LqZvE",
  authDomain: "react-firebase-auth-e1f2c.firebaseapp.com",
  projectId: "react-firebase-auth-e1f2c",
  storageBucket: "react-firebase-auth-e1f2c.appspot.com",
  messagingSenderId: "47822526549",
  appId: "1:47822526549:web:4bfaa2dc25f05e77509cdc",
};

const app = firebase.initializeApp(firebaseConfig);
export default app;
