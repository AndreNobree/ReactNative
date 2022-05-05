

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBNuWQckRy6TxNrGXbJmcyYh1wvn7UFd-o",
    authDomain: "purplelist-28a3e.firebaseapp.com",
    projectId: "purplelist-28a3e",
    storageBucket: "purplelist-28a3e.appspot.com",
    messagingSenderId: "406404661121",
    appId: "1:406404661121:web:a5bbe2ffaadd362b857280"
  };
  
  // Initialize Firebase
  
//firebase.initializeApp(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);
const app = getFirestore(firebaseApp);

export default app;
  //import firebase from "firebase"
  //import "firebase/storage"