import './main.style.css';
import MapContainer from '../GoogleMap/MapContainer.js';

export default function Main() {
	const Main = document.createElement('div');
		Main.classList.add('main-container');

	const ServiceAreaComponent = document.createElement('div');
		ServiceAreaComponent.classList.add('service-area-component');

	const areaHeader = document.createElement('div');
		areaHeader.classList.add('service-area-header');
		areaHeader.innerHTML = "Serving Golden, Colorado, and Denver's Western 'Burbs";
		areaHeader.innerHTML
	const areaParagraph = document.createElement('p');
		areaParagraph.classList.add('service-area-paragraph');
		areaParagraph.innerHTML = "...as you can see here, on this neat-o map.";

	ServiceAreaComponent.appendChild(areaHeader);
	// ServiceAreaComponent.appendChild(areaParagraph);
	ServiceAreaComponent.appendChild(MapContainer());
	Main.appendChild(ServiceAreaComponent);
	return Main;
};