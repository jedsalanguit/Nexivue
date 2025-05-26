import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0IWryF4eiXKL15JgMUOqV_YDuwXCM_Ms",
  authDomain: "nexivue.firebaseapp.com",
  projectId: "nexivue",
  storageBucket: "nexivue.firebasestorage.app",
  messagingSenderId: "119501007299",
  appId: "1:119501007299:web:efc0cded92ef2f87f77576",
  measurementId: "G-GPVM6Z7244",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
