// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

//Mateusz API key for firebase
const firebaseConfig = {
  apiKey: "AIzaSyCsDVSPFMCshpU8GbaQB0J_SdQCJQ4fKTM",
  authDomain: "nfse-96f25.firebaseapp.com",
  projectId: "nfse-96f25",
  storageBucket: "nfse-96f25.firebasestorage.app",
  messagingSenderId: "177145407285",
  appId: "1:177145407285:web:5e8174407145227a1dce7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);


export default app;
