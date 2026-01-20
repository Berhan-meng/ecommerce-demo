// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  apiKey: "AIzaSyD8xqY_tU8FpivzbgNqIf4IoRJVgJkam8Y",
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  authDomain: "e-clone-4a388.firebaseapp.com",
  // projectId: import.meta.env.VITE_PROJECT_ID,
  projectId: "e-clone-4a388",
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  storageBucket: "e-clone-4a388.firebasestorage.app",
  // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  messagingSenderId: "56425691966",
  // appId: import.meta.env.VITE_APP_ID,
  appId: "1:56425691966:web:8a8537b8233976945d8a6f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
