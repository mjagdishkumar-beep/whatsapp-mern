import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDQdlGLMBbLL9EFK61223z0POvz06ZBr1g",
    authDomain: "whatsapp-mern-mj.firebaseapp.com",
    projectId: "whatsapp-mern-mj",
    storageBucket: "whatsapp-mern-mj.appspot.com",
    messagingSenderId: "769843353505",
    appId: "1:769843353505:web:9657c4361cd80764219de0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firebase()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db