import './style.css';
import ServiceAreaMap from './ServiceAreaMap.js';

export default function MapContainer() {
	const container = document.createElement('div');
		container.id = 'map';
		container.classList.add('map-container');

	ServiceAreaMap();

	return container;
}