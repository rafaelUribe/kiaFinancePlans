// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3cACt_IWF44R1XAMg9jjuk3ccZ3G3H40",
    authDomain: "cotizador-kia.firebaseapp.com",
    projectId: "cotizador-kia",
    storageBucket: "cotizador-kia.appspot.com",
    messagingSenderId: "1033396562902",
    appId: "1:1033396562902:web:3bd2fa20ea346d637c9277",
    measurementId: "G-T2Y2VTM1ZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const auth = getAuth(app);