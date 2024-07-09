// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQT15BSiW04ziD59K9xmVJl3QBC0QtkJM",
  authDomain: "smart-contracts-e41bd.firebaseapp.com",
  projectId: "smart-contracts-e41bd",
  storageBucket: "smart-contracts-e41bd.appspot.com",
  messagingSenderId: "464641723628",
  appId: "1:464641723628:web:fb53c3a6d01a468e1ca9c9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
