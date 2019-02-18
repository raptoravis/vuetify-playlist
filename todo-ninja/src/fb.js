import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD5YTSpRTcFOEBkrwas13k6sRLlNib0AMw",
  authDomain: "anduo-todos.firebaseapp.com",
  databaseURL: "https://anduo-todos.firebaseio.com",
  projectId: "anduo-todos",
  storageBucket: "anduo-todos.appspot.com",
  messagingSenderId: "523721404810"
};
firebase.initializeApp(config);
const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true });

export default db;
