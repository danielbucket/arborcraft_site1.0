import './style.css';
import NavBar from './NavBar/NavBar.js';
import navbarData from './navbarData.js';
import HeaderLogo from './HeaderLogo/HeaderLogo.js';
import ContactInfo from './ContactInfo/ContactInfo.js';

export default function Header() {
	const headerContainer = document.createElement('header');
		headerContainer.classList.add('header-container', 'main-page-layout');
		headerContainer.appendChild(HeaderLogo());
		headerContainer.appendChild(ContactInfo());
		headerContainer.appendChild(NavBar());

	return headerContainer;
};