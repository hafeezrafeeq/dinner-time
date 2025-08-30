// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaj8ZLe4rxlugiV55-m7T3aPIfU4BHNV8",
  authDomain: "dinner-time-ff764.firebaseapp.com",
  projectId: "dinner-time-ff764",
  storageBucket: "dinner-time-ff764.firebasestorage.app",
  messagingSenderId: "425765057646",
  appId: "1:425765057646:web:283103ebd993afef65a27f",
  measurementId: "G-HS22P41DER"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
