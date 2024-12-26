// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "promanager-54fb2.firebaseapp.com",
  projectId: "promanager-54fb2",
  storageBucket: "promanager-54fb2.appspot.com",
  messagingSenderId: "1012300220755",
  appId: "1:1012300220755:web:78ba7be8d896c3d303f9a6",
  measurementId: "G-BS868V9T85"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);