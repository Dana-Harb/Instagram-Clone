import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


 
const firebaseConfig = {
  apiKey: "AIzaSyAAVNYn0BK53w2_hCJhg__5vexAVhrM0E4",
  authDomain: "insta-clone-c0b29.firebaseapp.com",
  projectId: "insta-clone-c0b29",
  storageBucket: "insta-clone-c0b29.appspot.com",
  messagingSenderId: "621132320483",
  appId: "1:621132320483:web:1f5f6de678f1c218f3ffd6",
  measurementId: "G-HEFLSRXFDV"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth , firestore, storage };
