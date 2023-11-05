import './index.style.css';
import Header from './components/Header/Header.js';
import BodyComponent from './components/Body/Body.js';
import Footer from './components/Footer/Footer.js';
import { app, analytics } from './firebaseConfig.js';


if (process.env.NODE_ENV !== 'production') {
	console.log('COMPILED IN DEVELOPMENT MODE. ERR MER GERD!');
};


function App() {
	const AppContainer = document.createElement('div');
		AppContainer.classList.add('AppContainer');

		AppContainer.appendChild(Header());
		AppContainer.appendChild(BodyComponent());
		AppContainer.appendChild(Footer());
	return AppContainer;
};

document.body.appendChild(App());
