import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


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
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);