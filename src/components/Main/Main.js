import './style.css';
import MapContainer from '../GoogleMap/MapContainer.js';

export default function Main() {
	const Main = document.createElement('div');
		Main.classList.add('main-container');
		
		Main.appendChild(MapContainer());

	return Main;
};