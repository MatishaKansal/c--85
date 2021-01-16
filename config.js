import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCMc4M-gEbPEUri_mpGeIjt60Ep_8I6byM",
  authDomain: "book-santa-app-9cea0.firebaseapp.com",
  projectId: "book-santa-app-9cea0",
  storageBucket: "book-santa-app-9cea0.appspot.com",
  messagingSenderId: "947616066836",
  appId: "1:947616066836:web:05f866c997189ca458a601",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
