import './index.style.css';
import Header from './components/Header/Header.js';
import Body from './components/Body/Body.js';
import Footer from './components/Footer/Footer.js';


function App() {
	const AppContainer = document.createElement('div');
		AppContainer.classList.add('AppContainer');
		AppContainer.appendChild(Header());
		AppContainer.appendChild(Body());
		AppContainer.appendChild(Footer());

	return AppContainer;
};

document.body.appendChild(App());