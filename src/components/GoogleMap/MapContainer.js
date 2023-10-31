import ServiceAreaMap from './ServiceAreaMap.js';

export default function MapContainer() {
	const container = document.createElement('div');
		container.classList.add('map-container');
		container.id = 'service_map';

	ServiceAreaMap();
	return container;
};