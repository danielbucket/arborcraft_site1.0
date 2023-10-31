import './main.style.css';
import MapContainer from '../GoogleMap/MapContainer.js';


export default function Main() {
	const Main = document.createElement('div');
		Main.classList.add('main-container');

	const serviceAreaContainer = () => {
		const container = document.createElement('div');
			container.classList.add('service-area-container');
			container.id = "slide-container";

		const serviceAreaHeader = document.createElement('div');
			serviceAreaHeader.classList.add('service-area-header', 'slide-header');
			serviceAreaHeader.innerHTML = "Serving Golden, Colorado, \<br>and Denver's western 'burbs. \<br> Since 2020";

		const serviceAreaBody = MapContainer();

			container.appendChild(serviceAreaHeader);
			container.appendChild(serviceAreaBody);

		return container;
	};

	const aboutUsContainer = () => {
		const container = document.createElement('div');
			container.classList.add('about-us-container');
			container.id = "slide-container";

		const aboutUsHeader = document.createElement('div');
			aboutUsHeader.classList.add('about-us-header', 'slide-header');
			aboutUsHeader.innerHTML = "About Us Header";

		const aboutUsBody = document.createElement('div');
			aboutUsBody.classList.add('about-us-body', 'slide-body');
			aboutUsBody.innerHTML = "About Us Body";


		container.appendChild(aboutUsHeader);
		container.appendChild(aboutUsBody);

		return container;
	};

	const servicesContainer = () => {
		const container = document.createElement('div');
			container.classList.add('services-container');
			container.id = "slide-container";

		const servicesHeader = document.createElement('div');
			servicesHeader.classList.add('services-header', 'slide-header');
			servicesHeader.innerHTML = "Services Header";

		const servicesBody = document.createElement('div');
			servicesBody.classList.add('services-body', 'slide-body');
			servicesBody.innerHTML = "Services Body";

		container.appendChild(servicesHeader);
		container.appendChild(servicesBody);

		return container;
	};

	Main.appendChild(serviceAreaContainer());
	Main.appendChild(aboutUsContainer());
	Main.appendChild(servicesContainer());

	return Main;
};