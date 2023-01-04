import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAz1kiZ6mv-u1XNSnQiwI0k3Kn4xgep0U0",
    authDomain: "app-chat-ebb12.firebaseapp.com",
    projectId: "app-chat-ebb12",
    storageBucket: "app-chat-ebb12.appspot.com",
    messagingSenderId: "195416031860",
    appId: "1:195416031860:web:8367d83846b8022e694721",
    measurementId: "G-7HWY1P1Z3K"
  };

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);