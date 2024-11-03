// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBc5ExecLeXL-d6ka8rI5NbfapZxV6TYg",
  authDomain: "e-commerce-web-app-39421.firebaseapp.com",
  projectId: "e-commerce-web-app-39421",
  storageBucket: "e-commerce-web-app-39421.appspot.com",
  messagingSenderId: "595418059678",
  appId: "1:595418059678:web:446e68f47c266315a0fc8f",
  measurementId: "G-XMJM0BQFR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);



export {analytics,auth,firestore}