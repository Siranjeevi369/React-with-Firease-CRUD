// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD2YLb7ZHPlgYzA1Qqd0tbXeMZvQNLXA8",
  authDomain: "siranjeevi-72c67.firebaseapp.com",
  databaseURL: "https://siranjeevi-72c67-default-rtdb.firebaseio.com",
  projectId: "siranjeevi-72c67",
  storageBucket: "siranjeevi-72c67.appspot.com",
  messagingSenderId: "658862441429",
  appId: "1:658862441429:web:ae9f25d6f4c15992c0b35c",
  measurementId: "G-S5R71R8YX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;