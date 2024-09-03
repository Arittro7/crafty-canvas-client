// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9ud26b0nDv3cH1k6L3RHrOmEHHIM1wPI",
  authDomain: "crafty-canvas-c8b4f.firebaseapp.com",
  projectId: "crafty-canvas-c8b4f",
  storageBucket: "crafty-canvas-c8b4f.appspot.com",
  messagingSenderId: "1073717921233",
  appId: "1:1073717921233:web:7c676334eacadb55530cf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;