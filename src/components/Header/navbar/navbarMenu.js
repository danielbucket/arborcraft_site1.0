
import "./navbarMenu.style.css";
import navbarData from '../navbarData.js';
const menuIcon = require('../../../assets/icons/menu-boxed.svg');

const navbarCompiler = data => {
	const navbarContainer = document.createElement('div');
		navbarContainer.classList.add('navbar-container');

	const navbarCards = data.map((i,num) => {
		const card = document.createElement('div');
			card.classList.add('navbar-option');
			card.id = num;
			card.innerHTML = i.name;
			
		return card;
	});

	navbarCards.map(i => navbarContainer.appendChild(i))
	return navbarContainer;
};

const navbarMenu = data => {
	const icon = new Image();
		icon.src = menuIcon;
		icon.classList.add('drop-menu-icon');

	const iconContainer = document.createElement('div');
		iconContainer.classList.add('drop-menu-container');
		iconContainer.appendChild(icon);

	return iconContainer;
};

export default navbarMenu(navbarData);