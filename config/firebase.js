// Import the functions you need from the SDKs you need
import firebase, {initializeApp} from "firebase"
// import { getAuth,createUserWithEmailAndPassword } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAU1SZbbDjsdwVXL9_vMjZnP8zfmHnbdw",
  authDomain: "bancodedadoswego-f04a9.firebaseapp.com",
  projectId: "bancodedadoswego-f04a9",
  storageBucket: "bancodedadoswego-f04a9.appspot.com",
  messagingSenderId: "495010629511",
  appId: "1:495010629511:web:a61f26cf45eeb3d4ff7522"
};

// const app = initializeApp(firebaseConfig);
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = initializeApp(firebaseConfig);
  firebase.firestore().settings({ experimentalForceLongPolling: true });
} else {
  app = firebase.app();
  

}

export const auth = firebase.auth()
export const db = firebase.firestore(app)




  