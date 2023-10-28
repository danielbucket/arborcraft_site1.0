import "./headerLogo.style.css";
const icon_noTree = require('../../../assets/logos/arborcraft.png');
const icon_wTree = require('../../../assets/logos/ArborCraft_extended.png');

const headerLogo = () => {
  const logo = new Image();
	  logo.classList.add('header-logo');
	  logo.src = icon_noTree;

	const logoContainer = document.createElement('div');
		logoContainer.classList.add('header-logo-container');
	  logoContainer.appendChild(logo);

	return logoContainer;
};

export default headerLogo();