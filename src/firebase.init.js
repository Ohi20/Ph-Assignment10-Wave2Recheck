// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoQtK7mvMN6xVm29jDHjySQylAON_gH9k",
  authDomain: "assignment-10-4a27b.firebaseapp.com",
  projectId: "assignment-10-4a27b",
  storageBucket: "assignment-10-4a27b.appspot.com",
  messagingSenderId: "91546635848",
  appId: "1:91546635848:web:c69a0e469432e1dde8127d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;