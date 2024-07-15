import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC2H0Jbm_71_KJtvrwauWWJ8L6Me3prRJA",
  authDomain: "realtimedb-d9c26.firebaseapp.com",
  projectId: "realtimedb-d9c26",
  storageBucket: "realtimedb-d9c26.appspot.com",
  messagingSenderId: "806608124408",
  appId: "1:806608124408:web:b5c05b3c311e4d6a073e0d",
  measurementId: "G-16CF3MSYVP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);