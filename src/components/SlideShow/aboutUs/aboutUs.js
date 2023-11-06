const acLogo = require('../../../assets/logos/arborcraftTree.png');
import style from './aboutUs.style.css';

export const aboutUs = () => {
	const container = document.createElement('div');
		container.classList.add('about-us-container', 'slide-topic-card-body');

	const text = document.createElement('div');
		text.classList.add('about-us-text');
		text.innerHTML = "We're not your typical do it fast and do it dirty tree care company. At ArborCraft we take the time to do the job thoroughly and do it well. We base our reputation on doing the job right the first time.";

	const logo = new Image();
		logo.src = acLogo;
		logo.classList.add('about-us-logo');

	container.appendChild(logo);
	container.appendChild(text);
	return container;
};