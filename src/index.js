import './style.css';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';

function App() {
	const screenWidth = window.screen.width;
	const AppContainer = document.createElement('div');
		AppContainer.classList.add('AppContainer');
		AppContainer.appendChild(Header(screenWidth));
		AppContainer.appendChild(Main());
		AppContainer.appendChild(Footer());

	return AppContainer;
};

document.body.appendChild(App());