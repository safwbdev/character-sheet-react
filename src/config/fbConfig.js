import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAP4IJ5VMouABQ54_5EM427i0YFKZ9G70s",
    authDomain: "marioplan-b107c.firebaseapp.com",
    databaseURL: "https://marioplan-b107c.firebaseio.com",
    projectId: "marioplan-b107c",
    storageBucket: "",
    messagingSenderId: "1096262947622",
    appId: "1:1096262947622:web:130ba002bca777dc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;