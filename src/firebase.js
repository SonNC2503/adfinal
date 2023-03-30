// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "test-349db.firebaseapp.com",
    projectId: "test-349db",
    storageBucket: "test-349db.appspot.com",
    messagingSenderId: "1093983689315",
    appId: "1:1093983689315:web:9e710c0716cb03306d7656"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);