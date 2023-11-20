import style from './portfolio.style.css';
const ownerPhoto = require('../../../assets/images/selfi-2.jpg');

export const portfolio = () => {
	const container = document.createElement('div');
		container.classList.add('portfolio-container', 'slide-topic-card-body');

	const photo = new Image();
		photo.src = ownerPhoto;
		photo.classList.add('portfolio-img');

	const contactText = document.createElement('div');
		contactText.classList.add('portfolio-text');
		contactText.innerHTML = "Daniel Ludwick\<br>Owner/Operator";

	container.appendChild(photo);
	container.appendChild(contactText);

	return container;
};