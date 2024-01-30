// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD1gZ7I4hGSzFOWnsYL8KWvT4mr8lRt3I",
  authDomain: "openinapp-86828.firebaseapp.com",
  projectId: "openinapp-86828",
  storageBucket: "openinapp-86828.appspot.com",
  messagingSenderId: "689663004625",
  appId: "1:689663004625:web:c8a3e72c715ded61031af0",
  measurementId: "G-E0DC396NWL",
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
