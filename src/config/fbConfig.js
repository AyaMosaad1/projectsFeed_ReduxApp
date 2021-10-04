import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config =  {
  apiKey: "AIzaSyBJYBkm2-Kei-SDYyBNGfHF84OuJUvYMZA",
  authDomain: "projects-redux.firebaseapp.com",
  projectId: "projects-redux",
  storageBucket: "projects-redux.appspot.com",
  messagingSenderId: "4597749340",
  appId: "1:4597749340:web:17b238a6095b19508fb899",
  measurementId: "G-5CJYP2GN42"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;