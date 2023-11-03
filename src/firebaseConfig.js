// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0mnoeYzcuBoRFqGAaCLKKRHi6sCorZ_M",
  authDomain: "arborcraftwebsite-6ac87.firebaseapp.com",
  projectId: "arborcraftwebsite-6ac87",
  storageBucket: "arborcraftwebsite-6ac87.appspot.com",
  messagingSenderId: "921687228230",
  appId: "1:921687228230:web:e291f094dc6adbcc7eef47",
  measurementId: "G-F0YRYEQ99K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export {
	app,
	analytics
};