import './index.style.css';
import Header from './components/Header/Header.js'
import SlideShow from './components/SlideShow/SlideShow.js'
import Footer from './components/Footer/Footer.js'


function App() {
	const AppContainer = document.createElement('div')
		AppContainer.classList.add('AppContainer')
		AppContainer.appendChild(Header())
		AppContainer.appendChild(SlideShow())
		AppContainer.appendChild(Footer())
	return AppContainer
};

document.body.appendChild(App())
