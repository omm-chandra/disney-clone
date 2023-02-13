import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBZvMpB7wrEJQSJCqsXGkE5I5b2CkGzJ4A",
  authDomain: "disney-clone-420b2.firebaseapp.com",
  projectId: "disney-clone-420b2",
  storageBucket: "disney-clone-420b2.appspot.com",
  messagingSenderId: "430654299932",
  appId: "1:430654299932:web:0fed189d4beefd8966e4d9",
  measurementId: "G-R1HYS6LGZV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;