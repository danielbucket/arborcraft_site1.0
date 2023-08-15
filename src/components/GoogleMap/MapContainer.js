import './style.css';
import Map_2 from './Map_2.js';

export default function MapContainer() {
	const container = document.createElement('div');
		container.id = 'map';
		container.classList.add('map-container');

	Map_2();

	return container;
}