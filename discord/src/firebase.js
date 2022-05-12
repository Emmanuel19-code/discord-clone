import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAuKqkPZ_U7VzmbE9JJ-gUCJ_kZajriO94",
  authDomain: "discord-clone-de.firebaseapp.com",
  projectId: "discord-clone-de",
  storageBucket: "discord-clone-de.appspot.com",
  messagingSenderId: "1050229310026",
  appId: "1:1050229310026:web:1da777eb0c8503fe705cb3",
  measurementId: "G-H86BX4LE4K"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();