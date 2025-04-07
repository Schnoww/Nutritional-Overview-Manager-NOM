// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDEF-_j6u3PgdXpuIuheYZhPtdUrxOzwak",
  authDomain: "nutritional-overview-manager.firebaseapp.com",
  projectId: "nutritional-overview-manager",
  storageBucket: "nutritional-overview-manager.firebasestorage.app",
  messagingSenderId: "920329015647",
  appId: "1:920329015647:web:dfce885ff463bbb03ae6ea",
  measurementId: "G-2041YLSVKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export default app;
