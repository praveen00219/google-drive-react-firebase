// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjeg3KjwF1xJzegpaeXb2ahh3a4cHe_60",
  authDomain: "drive-clone-21.firebaseapp.com",
  projectId: "drive-clone-21",
  storageBucket: "drive-clone-21.appspot.com",
  messagingSenderId: "1052188379381",
  appId: "1:1052188379381:web:d24193045e195a94859dbc",
};

// Initialize Firebase
!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
const provider = new GoogleAuthProvider();

export default db;

export { auth, storage, provider };
