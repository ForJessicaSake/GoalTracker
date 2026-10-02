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
  Auth,
  User 
} from "firebase/auth";
import {
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase. Auth is created on demand so a missing API key
// does not crash `next build` while page data is collected.
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default getFirestore(app);

let auth: Auth | null = null;

function getFirebaseAuth() {
  if (!firebaseConfig.apiKey) {
    throw new Error("Missing NEXT_PUBLIC_FIREBASE_API_KEY");
  }
  if (!auth) {
    auth = getAuth(app);
  }
  return auth;
}

//signup reusable function module
export function signUp(email: string, password: string) {
  return createUserWithEmailAndPassword(getFirebaseAuth(), email, password);
}
//signin reusable function module
export function logIn(email: string, password: string) {
  return signInWithEmailAndPassword(getFirebaseAuth(), email, password);
}
//logout reusable function module
export function Logout() {
  return signOut(getFirebaseAuth());
}

export function googleAuth() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(getFirebaseAuth(), provider);
}

//custom hook for signUp
export function UseAuth() {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    if (!firebaseConfig.apiKey) return;
    const unsubscribe = onAuthStateChanged(getFirebaseAuth(), (user: any) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  return currentUser;
}
