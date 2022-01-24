import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnlfZaLCEyOJxAmYA6HPOAiIZx7PKMARA",
  authDomain: "ninja-firegram-a6547.firebaseapp.com",
  projectId: "ninja-firegram-a6547",
  storageBucket: "ninja-firegram-a6547.appspot.com",
  messagingSenderId: "388650653583",
  appId: "1:388650653583:web:b9939231698e51db84ddfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export ( projectStorage, projectFirestore );