import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import {storage}from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4tNovXinv_qhbMHfeHg3rXmX-PmIZg-Q",
  authDomain: "foundit-49203.firebaseapp.com",
  projectId: "foundit-49203",
  storageBucket: "foundit-49203.appspot.com",
  messagingSenderId: "935871139912",
  appId: "1:935871139912:web:96043ec8c49cf33516c87d"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);

} else {
  app = firebase.app()
}
const db = app.firestore();
const auth = firebase.auth();
const storage = app.storage();
export { auth, db, storage };