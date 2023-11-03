import './body.style.css';
import MapContainer from '../GoogleMap/MapContainer.js';
import SlideShow from '../SlideShow/SlideShow.js';

export default function BodyComponent() {
	const BodyComponent = document.createElement('div');
		BodyComponent.classList.add('body-container');


	BodyComponent.appendChild(SlideShow());
	return BodyComponent;
};


