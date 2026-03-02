// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKg5MMONJw3S0CeouWNZl19OgWrDMo5iI",
  authDomain: "explore-email-pasword-auth-f.firebaseapp.com",
  projectId: "explore-email-pasword-auth-f",
  storageBucket: "explore-email-pasword-auth-f.firebasestorage.app",
  messagingSenderId: "650506639945",
  appId: "1:650506639945:web:1040ba2ec93bc2e6623d98",
  measurementId: "G-H6SPMYCGZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 // Initialize Firebase Authentication and get a reference to the service

 export const auth = getAuth(app);