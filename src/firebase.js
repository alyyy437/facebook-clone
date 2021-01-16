import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBxgNmgVazmQsHCTXb8hSiD8r_JwlWNCww",
    authDomain: "facebook-clone-7ecf6.firebaseapp.com",
    projectId: "facebook-clone-7ecf6",
    storageBucket: "facebook-clone-7ecf6.appspot.com",
    messagingSenderId: "982010393314",
    appId: "1:982010393314:web:1250af7c756c234613e4bb",
    measurementId: "G-F0DMMGBWGQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;