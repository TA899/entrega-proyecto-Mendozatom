import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaGslpcbeGfvADbMIp9K07e5aRsLk1eFw",
  authDomain: "mi-ecommerce-react-1.firebaseapp.com",
  projectId: "mi-ecommerce-react-1",
  storageBucket: "mi-ecommerce-react-1.firebasestorage.app",
  messagingSenderId: "508882591759",
  appId: "1:508882591759:web:574d8a62b39e4a8f20837a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);