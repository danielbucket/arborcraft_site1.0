import './index.style.css';
import Header from './components/Header/Header.js';
import Body from './components/Body/Body.js';
import Footer from './components/Footer/Footer.js';
import UnderConstructionPopup from './components/UnderConstructionPopup/UnderConstructionPopup.js';





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








if (process.env.NODE_ENV !== 'production') {
	console.log('COMPILED IN DEVELOPMENT MODE. ERR MER GERD!');
};


function App() {
	const AppContainer = document.createElement('div');
		AppContainer.classList.add('AppContainer');

		AppContainer.appendChild(UnderConstructionPopup());
		AppContainer.appendChild(Header());
		AppContainer.appendChild(Body());
		AppContainer.appendChild(Footer());
	return AppContainer;
};

document.body.appendChild(App());
