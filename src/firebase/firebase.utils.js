import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCZABEf2uY0JoHEoSRMo-Zyx5GpMvkqW4w",
  authDomain: "react-botique.firebaseapp.com",
  projectId: "react-botique",
  storageBucket: "react-botique.appspot.com",
  messagingSenderId: "420661792998",
  appId: "1:420661792998:web:93bcf0eb795eebb587ab27",
  measurementId: "G-874QG34DL7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;