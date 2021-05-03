import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyDaW3lGzjqpjuswHGx7fGUBz-a80TsW8OI",
  authDomain: "challenge-1cc66.firebaseapp.com",
  projectId: "challenge-1cc66",
  storageBucket: "challenge-1cc66.appspot.com",
  messagingSenderId: "375490145115",
  appId: "1:375490145115:web:77111b84e7a3c49a34887e",
};

const firebaseapp = firebase.initializeApp(firebaseConfig)
const db = firebaseapp.firestore();
const auth = firebase.auth();
export { db, auth} ;
