npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbttp9-1F7eZH_dKtwzan342mQJ6-_VKY",
  authDomain: "dutkyobot-a4e39.firebaseapp.com",
  projectId: "dutkyobot-a4e39",
  storageBucket: "dutkyobot-a4e39.appspot.com",
  messagingSenderId: "676690856261",
  appId: "1:676690856261:web:9b462f13e1547b9bc5562c",
  measurementId: "G-91PCGWEWJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
