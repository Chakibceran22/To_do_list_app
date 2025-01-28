// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwCYW0swVUjfji5BNdlnimhwtiiEb3XxU",
  authDomain: "to-do-list-fb4f2.firebaseapp.com",
  projectId: "to-do-list-fb4f2",
  storageBucket: "to-do-list-fb4f2.firebasestorage.app",
  messagingSenderId: "693955934917",
  appId: "1:693955934917:web:377efe35b5641531310eac",
  measurementId: "G-81KXKREW5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);