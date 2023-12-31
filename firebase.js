// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection} from 'firebase/firestore';

// Create YOUR FIREBASE PROJECT and Replace to or copy paste "firebaseConfig"

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN", 
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-EKZR0PX1VN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const notesCollection = collection(db, 'notes');