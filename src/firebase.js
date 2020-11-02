import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDU_0bQdVBtNVi5ZwWwy2tudjiu6NH5HmI",
    authDomain: "chat-app-ac4e1.firebaseapp.com",
    databaseURL: "https://chat-app-ac4e1.firebaseio.com",
    projectId: "chat-app-ac4e1",
    storageBucket: "chat-app-ac4e1.appspot.com",
    messagingSenderId: "733393531444",
    appId: "1:733393531444:web:b20bbe4902e3e16e6b9061",
    measurementId: "G-E863RBWM1Q"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;