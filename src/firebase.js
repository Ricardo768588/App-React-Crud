import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiYldXI7qu8vUCc_aYEpSPrB7t0so6c08",
  authDomain: "todo-app-r-d0787.firebaseapp.com",
  projectId: "todo-app-r-d0787",
  storageBucket: "todo-app-r-d0787.appspot.com",
  messagingSenderId: "356987053257",
  appId: "1:356987053257:web:88674bc3194ebf45345918"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)