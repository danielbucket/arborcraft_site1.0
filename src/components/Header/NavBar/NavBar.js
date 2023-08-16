import "./style.css";
import { navbarData } from '../navbarData.js';

function navbarCompiler(data) {
	const navbarContainer = document.createElement('div');
		navbarContainer.classList.add('navbar-container');

	const navbarCards = Object.keys(data).map((i,arrNum,objName) => {
		const optionObj = data[i];
		const card = document.createElement('div');
			card.classList.add("navbar-option");
			card.id = objName[arrNum];
			card.innerHTML = optionObj.name;

		return card;
	});
	navbarCards.map(i => navbarContainer.appendChild(i));

	return navbarContainer;
};


export default function NavBar() {
	return navbarCompiler(navbarData);
};