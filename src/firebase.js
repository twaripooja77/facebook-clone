// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from'firebase/storage';
import {getFirestore} from'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAb2NZ9QBQRYRWRFdHxoK5qVMRHfMZsm7s",
  authDomain: "fb-clone-d4ab4.firebaseapp.com",
  projectId: "fb-clone-d4ab4",
  storageBucket: "fb-clone-d4ab4.appspot.com",
  messagingSenderId: "412821060294",
  appId: "1:412821060294:web:76e1a11695aa53074e75c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);
export const storage=getStorage();
export const db= getFirestore(app);