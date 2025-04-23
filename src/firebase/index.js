// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtFcqcDBP-JEWwUXqRcm_yOPzJxvN-SDo",
  authDomain: "chat1-d6c82.firebaseapp.com",
  projectId: "chat1-d6c82",
  storageBucket: "chat1-d6c82.firebasestorage.app",
  messagingSenderId: "837116824910",
  appId: "1:837116824910:web:b0893b081697af1eb9a21f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ! Google Sağlayıcısınu Kur
 export const provider = new GoogleAuthProvider()

//!  auth hizmetlerinin referanslarını al
export const auth = getAuth(app)

// ! database hizmetinin referansını al
export const db = getFirestore(app)