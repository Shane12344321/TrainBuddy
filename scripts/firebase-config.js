// scripts/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAh7fgI-csgsWpe1lj00YdqUTcLYXZlw0k",
    authDomain: "trainbuddy1234.firebaseapp.com",
    projectId: "trainbuddy1234",
    storageBucket: "trainbuddy1234.firebasestorage.app",
    messagingSenderId: "411729203974",
    appId: "1:411729203974:web:babf292d54fd72cdf94487"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Optional: Limit logins to VIT domains
// googleProvider.setCustomParameters({
//     hd: "vitstudent.ac.in"
// });
