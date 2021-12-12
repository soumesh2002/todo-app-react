// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0suKMmkynMqclRxpORKbX_PAgyN8uXo0",
  authDomain: "todo-app-react-361ac.firebaseapp.com",
  projectId: "todo-app-react-361ac",
  storageBucket: "todo-app-react-361ac.appspot.com",
  messagingSenderId: "1066959638155",
  appId: "1:1066959638155:web:9c29368fd4515e83d58e8e",
  measurementId: "G-8PECW0L5ZD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
export default db;
