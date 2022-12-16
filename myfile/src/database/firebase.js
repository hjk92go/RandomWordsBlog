// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//  apiKey: "AIzaSyCP6g7jYWsY0XhqJfH22O2nflRqlCOahUQ",
apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
authDomain: "blog-react-cffa9.firebaseapp.com",
  projectId: "blog-react-cffa9",
  storageBucket: "blog-react-cffa9.appspot.com",
  messagingSenderId: "862822479471",
//  appId: "1:862822479471:web:589f45c392e8ec152d7f9a"
appId: process.env.REACT_APP_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);