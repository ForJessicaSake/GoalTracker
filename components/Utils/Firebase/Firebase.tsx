// Import the functions you need from the SDKs you need
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "progresspal-fb266.firebaseapp.com",
    projectId: "progresspal-fb266",
    storageBucket: "progresspal-fb266.appspot.com",
    messagingSenderId: "660604516688",
    appId: "1:660604516688:web:7daa3f2ffe09b3a1a8d455",
    measurementId: "G-G8HZMMD2KV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);
const auth = getAuth();

//signup reusable function module 
export function signUp(email:string, password:string) {
    return createUserWithEmailAndPassword(auth, email, password);
}
//signin reusable function module 
export function logIn(email:string, password:string) {
    return signInWithEmailAndPassword(auth, email, password);
}
//logout reusable function module 
export function Logout() {
    return signOut(auth);
}

export function googleAuth() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
    // return signInWithRedirect(auth, provider);

  }

//custom hook for signUp
export function UseAuth() {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        const account = onAuthStateChanged(auth, (user:any) => {
            setCurrentUser(user);
        });
        return account;
    }, []);
    return currentUser;
}