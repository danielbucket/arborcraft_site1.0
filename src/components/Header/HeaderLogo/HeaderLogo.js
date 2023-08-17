import "./style.css";
import Logo from '../../../assets/ArborCraft_extended.png';

const HeaderLogo = () => {
	const companyLogo = new Image();
		companyLogo.src = Logo;
		companyLogo.classList.add('company-logo');
		companyLogo.setAttribute("alt", "Arborcraft Logo");

	return companyLogo;
};

export default HeaderLogo();