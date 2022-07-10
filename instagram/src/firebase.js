import firebase from "firebase";
import { initializeApp } from "firebase/app";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBucH7Kzm8Ds5CbuUs8uQJlzTPh3eZcTzA",
  authDomain: "instagram-clone-23884.firebaseapp.com",
  databaseURL: "https://instagram-clone-23884.firebaseio.com",
  projectId: "instagram-clone-23884",
  storageBucket: "instagram-clone-23884.appspot.com",
  messagingSenderId: "671034896143",
  appId: "1:671034896143:web:3aceafdf2319c9f1fc587a",
});

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*
const firebaseConfig = {
  apiKey: "AIzaSyAroLa-tCc7szwuU1Vhu7nNLFipkdMZJ5o",
  authDomain: "dnguyen-insta-remake-3aa5c.firebaseapp.com",
  projectId: "dnguyen-insta-remake-3aa5c",
  storageBucket: "dnguyen-insta-remake-3aa5c.appspot.com",
  messagingSenderId: "552600219848",
  appId: "1:552600219848:web:2306c3d38c5b725468f5fd"
};
*/

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
