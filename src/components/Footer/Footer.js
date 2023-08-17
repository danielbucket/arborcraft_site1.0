import './style.css';
import footerLogoData from './footerLogoData.js';

const logoCompiler = data => {
	const container = document.createElement('div');
		container.classList.add('logo-container');

	const logoCards = data.map((i,num) => {
		const card = new Image();
			card.classList.add('logo-image');
			card.src = i.src;
			card.id = num;
			card.alt = i.alt;

			if (i.href != "") {
				card.onclick = () => window.open(i.href);
			};

		return card;
	});

	logoCards.map(i => container.appendChild(i));
	return container;
};

export default function Footer() {
	const Footer = document.createElement('footer');
		Footer.classList.add('footer-container', 'main-page-layout');

		Footer.appendChild(logoCompiler(footerLogoData));
	return Footer;
};