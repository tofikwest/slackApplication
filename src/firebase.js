import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDBgmv3XgBVdyao7Ea-FIKmTEoEBPuNHw8',
  authDomain: 'slack-clone-42666.firebaseapp.com',
  projectId: 'slack-clone-42666',
  storageBucket: 'slack-clone-42666.appspot.com',
  messagingSenderId: '355074899052',
  appId: '1:355074899052:web:6244cad9f3e278bf2c6c49',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
