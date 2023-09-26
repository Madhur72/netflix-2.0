import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBnTs-B8mel2wAm3tL40aRT32fpWLJUues",
  authDomain: "netflix-clone-md72.firebaseapp.com",
  projectId: "netflix-clone-md72",
  storageBucket: "netflix-clone-md72.appspot.com",
  messagingSenderId: "761695869856",
  appId: "1:761695869856:web:2fda413c59ab4a3dad22c5"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)