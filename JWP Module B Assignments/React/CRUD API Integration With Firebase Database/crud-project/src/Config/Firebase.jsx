import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAoKxlwo1yh7uXInK7MdRajzLo1hOQf0v8",
  authDomain: "fir-authentication-5ec91.firebaseapp.com",
  projectId: "fir-authentication-5ec91",
  storageBucket: "fir-authentication-5ec91.firebasestorage.app",
  messagingSenderId: "983682754987",
  appId: "1:983682754987:web:ceb0cfdf011180346ccaee"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const auth = getAuth(app);

export {auth, db}


