import './style.css';
import ServiceAreaMap from './ServiceAreaMap.js';
import expandIcon from '../../assets/icons/expand.png';

export default function MapContainer() {
	const container = document.createElement('div');
		container.classList.add('map-container');
		container.id = 'service_map';
		
	ServiceAreaMap();
	return container;
};