// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqsa4x0ZkNemCtjWIrxYPSKPO7fVRb9fo",
  authDomain: "pruebastfg-5480e.firebaseapp.com",
  projectId: "pruebastfg-5480e",
  storageBucket: "pruebastfg-5480e.appspot.com",
  messagingSenderId: "70432525783",
  appId: "1:70432525783:web:7211a27e230cc668c90f92",
  measurementId: "G-LS0R076XN0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);