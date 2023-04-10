import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyCbh8x-cBbwP2Roew1kJxkfF2UgKZ1t7T0",
    authDomain: "authdemo-974da.firebaseapp.com",
    projectId: "authdemo-974da",
    storageBucket: "authdemo-974da.appspot.com",
    messagingSenderId: "768671840705",
    appId: "1:768671840705:android:dbe73b8b233f2bd98c1740"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
