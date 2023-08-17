import "./style.css";
import navbarData from '../navbarData.js';

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

export default function NavBar() {
	return navbarCompiler(navbarData);
};