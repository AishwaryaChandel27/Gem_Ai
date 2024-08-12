import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMht2bU9I8Wn5sbSNsSu1I2J9GL-ICfcU",
  authDomain: "gem-ai-bc5a8.firebaseapp.com",
  projectId: "gem-ai-bc5a8",
  storageBucket: "gem-ai-bc5a8.appspot.com",
  messagingSenderId: "22107255130",
  appId: "1:22107255130:web:cac2eb03b3116970b18363"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
