// const path = require('path');
// require('dotenv').config();

import './style.css';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';

function App() {
	const AppContainer = document.createElement('div');
	AppContainer.classList.add('AppContainer');
	AppContainer.appendChild(Header());
	AppContainer.appendChild(Main());
	AppContainer.appendChild(Footer());

	return AppContainer;
};

document.body.appendChild(App());