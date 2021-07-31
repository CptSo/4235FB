const firebase = require("firebase");
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBr28WQbV3JY_h6Wjs-C0fjKwMur8MMfuM",
    authDomain: "fir-databaseloginapp-ee06d.firebaseapp.com",
    databaseURL: "https://fir-databaseloginapp-ee06d-default-rtdb.firebaseio.com",
    projectId: "fir-databaseloginapp-ee06d",
    storageBucket: "fir-databaseloginapp-ee06d.appspot.com",
    messagingSenderId: "702651622722",
    appId: "1:702651622722:web:063897400b9dc2610594db"
  };

if (!firebase.apps.length) {
    firebase.initializeApp({});
 }else {
    firebase.app(); // if already initialized, use that one
 }
export default firebase;