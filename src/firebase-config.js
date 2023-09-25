// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmmfl0JNWdAuVIR-PQb5EtMOntGVEQwHA",
  authDomain: "blog-686d6.firebaseapp.com",
  projectId: "blog-686d6",
  storageBucket: "blog-686d6.appspot.com",
  messagingSenderId: "425980331330",
  appId: "1:425980331330:web:588a14d9de7ed04dc1f4db",
  measurementId: "G-Z34XGD18XJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
