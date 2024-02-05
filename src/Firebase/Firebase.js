
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBT99TjrPQppKR6X3uH7KmUevdG9SVvJYM",
  authDomain: "drive-f598d.firebaseapp.com",
  projectId: "drive-f598d",
  storageBucket: "drive-f598d.appspot.com",
  messagingSenderId: "238010552445",
  appId: "1:238010552445:web:61f8326bd03fa9e97ee114",
  measurementId: "G-NH5HC410NT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, storage, auth, provider };