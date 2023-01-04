// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz1kiZ6mv-u1XNSnQiwI0k3Kn4xgep0U0",
  authDomain: "app-chat-ebb12.firebaseapp.com",
  projectId: "app-chat-ebb12",
  storageBucket: "app-chat-ebb12.appspot.com",
  messagingSenderId: "195416031860",
  appId: "1:195416031860:web:8367d83846b8022e694721",
  measurementId: "G-7HWY1P1Z3K"
};

const phoneAuth = (req,res) =>{
    var {phoneNumber} = req.body; 
    
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);