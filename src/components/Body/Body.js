import './body.style.css';
import MapContainer from '../GoogleMap/MapContainer.js';
import slideData from './slideData';
const leftBtnIcon = require('../../assets/icons/left-arrow-acBlue.png');
const rightBtnIcon = require('../../assets/icons/right-arrow-acBlue.png');

export default function Body() {
	const Body = document.createElement('div');
		Body.classList.add('body-container');

	const slideCompiler = data => {
		const slideCardContainer = document.createElement('div');
			slideCardContainer.classList.add('slide-container');

		const swipeBtnLeft = () => {
			const swipeBtnLeft = new Image();
				swipeBtnLeft.src = leftBtnIcon;
				swipeBtnLeft.classList.add('swipe-button', 'left-btn');
				slideCardContainer.appendChild(swipeBtnLeft);

			return swipeBtnLeft;			
		};

		const swipeBtnRight = () => {
			const swipeBtnRight = new Image();
				swipeBtnRight.src = rightBtnIcon;
				swipeBtnRight.classList.add('swipe-button', 'right-btn');
				slideCardContainer.appendChild(swipeBtnRight);

			return swipeBtnRight;
		};


		const slideCards = data.map((i,num) => {
			const { slideName, header, body } = i;

			const cardContainer = document.createElement('div');
				cardContainer.classList.add(slideName + '-container', 'slide-card-container');
				cardContainer.id = num;

			const cardHeader = document.createElement('div');
				cardHeader.classList.add(slideName + '-header', 'slide-card-header');
				cardHeader.innerHTML = header;
				cardHeader.appendChild(swipeBtnLeft());
				cardHeader.appendChild(swipeBtnRight());

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

	Body.appendChild(slideCompiler(slideData));
	return Body;
};


