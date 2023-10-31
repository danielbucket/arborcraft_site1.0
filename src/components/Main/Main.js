import './main.style.css';
import MapContainer from '../GoogleMap/MapContainer.js';
import slideData from './slideData';


export default function Main() {
	const Main = document.createElement('div');
		Main.classList.add('main-container');

	const slideCompiler = data => {
		const slideCardContainer = document.createElement('div');
			slideCardContainer.classList.add('slide-container');

		const slideCards = data.map((i,num) => {
			const { slideName, header, body } = i;

			const cardContainer = document.createElement('div');
				cardContainer.classList.add(slideName + '-container', 'slide-card-container');
				cardContainer.id = num;

			const cardHeader = document.createElement('div');
				cardHeader.classList.add(slideName + '-header', 'slide-card-header');
				cardHeader.innerHTML = header;

			const cardBody = document.createElement('div');
				cardBody.classList.add(slideName + '-body', 'slide-card-body');

				if (typeof body !== 'string') {
					cardBody.appendChild(body);
				} else {
					cardBody.innerHTML = body;
				};

			cardContainer.appendChild(cardHeader);
			cardContainer.appendChild(cardBody);

			return cardContainer;
		})
		slideCards.map(i => slideCardContainer.appendChild(i));
		return slideCardContainer;
	};

	Main.appendChild(slideCompiler(slideData));
	return Main;
};


