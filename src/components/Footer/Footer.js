import './style.css';
import footerLogoData from './footerLogoData.js';

const logoCompiler = logoArr => {
	return logoArr.map((i,num) => {
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
};

export default function Footer() {
	const Footer = document.createElement('footer');
		Footer.classList.add('footer-container', 'main-page-layout');

	logoCompiler(footerLogoData).map(i => Footer.appendChild(i));

	return Footer;
};