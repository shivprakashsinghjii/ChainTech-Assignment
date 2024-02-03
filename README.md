ChainTech Network React Project:
The application have a login page, a registration page and a page where users can view and edit their account information.
This is a simple project built with React, Firebase Authentication, and Firebase Firestore.



1.Features
User authentication (Sign up, Log in, Log out)
Responsive design 
Error 404 page 
Edit and update Profile information



2.Navigate to the project directory:
cd ChainTech Assignment



3.Install dependencies:
npm install



4.Create a Firebase project and configure authentication and Firestore.
Add your Firebase configuration to firebase.js file in the src directory:

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Your Firebase configuration object
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;





5.Run the application:
npm start
The application should now be running on http://localhost:3000.



6.Usage
Navigate to http://localhost:3000 to access the Signup page then create account.
then "sign in", after this Account information will be shown where you can update your profile information and can log out.



7.Dependencies
react
react-dom
react-router-dom
firebase
CSS
Javascript



8.Author
Shiv Prakash Singh
[README.txt](https://github.com/shivprakashsinghjii/ChainTech-Assignment/files/14151531/README.txt)
