// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq-LxKqPrHgzikRhA7RvVEPEXS797ATAI",
  authDomain: "react-firebase-auth-74227.firebaseapp.com",
  projectId: "react-firebase-auth-74227",
  storageBucket: "react-firebase-auth-74227.firebasestorage.app",
  messagingSenderId: "681616492641",
  appId: "1:681616492641:web:83ddd26bda0afc31f44220"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);