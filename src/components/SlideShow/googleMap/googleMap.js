import serviceAreaMap from './serviceAreaMap.js';
import style from './serviceAreaMap.style.css';

export const googleMap = () => {
	const container = document.createElement('div');
		container.classList.add('map-container', 'topic-card-body');
		container.id = 'service_map';

	serviceAreaMap();
	return container;
};