// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCMXfcNWECFTrdVN0Cdk7PHEQlEn__rL4",
  authDomain: "andrew-kimani.firebaseapp.com",
  projectId: "andrew-kimani",
  storageBucket: "andrew-kimani.appspot.com",
  messagingSenderId: "471311406886",
  appId: "1:471311406886:web:0c3c94f8b9ff36289153e7",
  measurementId: "G-G370CJRGGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);