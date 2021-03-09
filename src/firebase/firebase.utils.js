import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyB8J_y5w2ao95BejGIVVutNY8K8xSwYNgk",
        authDomain: "manifest-clothing-db.firebaseapp.com",
        projectId: "manifest-clothing-db",
        storageBucket: "manifest-clothing-db.appspot.com",
        messagingSenderId: "332302763547",
        appId: "1:332302763547:web:d3112839e33f0d595adabe",
        measurementId: "G-8S52Y9BYKF"
      }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;