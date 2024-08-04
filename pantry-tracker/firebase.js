// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYXrGoC8eiW9TgmhIjoBevztGhooAhtGE",
  authDomain: "hs-pantry-tracker-dbc4b.firebaseapp.com",
  projectId: "hs-pantry-tracker-dbc4b",
  storageBucket: "hs-pantry-tracker-dbc4b.appspot.com",
  messagingSenderId: "937428236451",
  appId: "1:937428236451:web:5236f54a2cbb5978be2716"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };