// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzCxOU6Yn0pjZi-ql9fgPkFbtR9xJV1uo",
  authDomain: "techfiesta-1e8dd.firebaseapp.com",
  projectId: "techfiesta-1e8dd",
  storageBucket: "techfiesta-1e8dd.appspot.com",
  messagingSenderId: "561026864655",
  appId: "1:561026864655:web:d4ae5e07cca241a734f57a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth