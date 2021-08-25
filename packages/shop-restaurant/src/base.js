import firebase from 'firebase/app';
import 'firebase/auth';

const provider = new firebase.auth.GoogleAuthProvider();
console.log(firebase.auth);
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let config = {
    apiKey: "AIzaSyCCvZM2B4036G9qMvkeCa_8_r-1EFXzXDg",
    authDomain: "tuecommerce-9aca3.firebaseapp.com",
    databaseURL: "https://tuecommerce-9aca3.firebaseio.com",
    projectId: "tuecommerce-9aca3",
    storageBucket: "tuecommerce-9aca3.appspot.com",
    messagingSenderId: "13854964639", 
    appId: "13854964639-ie0g4ejmkg7fa4e2gb0b2t7hci0b27u0.apps.googleusercontent.com",
    // appId: "1:13854964639:web:eac8280f24bebcac919baa",
    measurementId: "G-74D8PTD9Z9"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }else {
  firebase.app(); // if already initialized, use that one
 }
  

  export default [firebase,provider];  
