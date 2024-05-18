// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcfWlYjjd7GFNgmOO4X0wHoVWYa7z92_A",
  authDomain: "wt-world-tour.firebaseapp.com",
  databaseURL:
    "https://wt-world-tour-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wt-world-tour",
  storageBucket: "wt-world-tour.appspot.com",
  messagingSenderId: "1076932215498",
  appId: "1:1076932215498:web:a9b3ce6bc7ba1391edea33",
  measurementId: "G-LZMCCFHS7R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };
