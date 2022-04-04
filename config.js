import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyARtPm6ixyjX2spotbAhHAqv9Dzs-acs4c",
  authDomain: "e-ride-c6d7e.firebaseapp.com",
  projectId: "e-ride-c6d7e",
  storageBucket: "e-ride-c6d7e.appspot.com",
  messagingSenderId: "125907808253",
  appId: "1:125907808253:web:1c4537daa58879bb7ff394",
  measurementId: "G-8SQ3K5E9E9"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
