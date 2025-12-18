// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8xqY_tU8FpivzbgNqIf4IoRJVgJkam8Y",
  authDomain: "e-clone-4a388.firebaseapp.com",
  projectId: "e-clone-4a388",
  storageBucket: "e-clone-4a388.firebasestorage.app",
  messagingSenderId: "56425691966",
  appId: "1:56425691966:web:8a8537b8233976945d8a6f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
