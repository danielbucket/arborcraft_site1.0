import "./headerLogo.style.css";

const headerLogo = () => {
  const logo = new Image();
	  logo.classList.add('header-logo');

	const logoContainer = document.createElement('div');
		logoContainer.classList.add('header-logo-container');
	  logoContainer.appendChild(logo);

	return logoContainer;
};

export default headerLogo();