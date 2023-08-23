import './header.style.css';
import headerLogo from './headerLogo/headerLogo.js';
import contactInfo from './contactInfo/contactInfo.js';
import navbarMenu from './navbar/navbarMenu.js';
import navbarData from './navbarData.js';

export default function Header() {
	const { phone, email, locale } = contactInfo;

	const headerContainer = document.createElement('header');
		headerContainer.classList.add('header-container', 'main-page-layout');
		headerContainer.appendChild(headerLogo);
		headerContainer.appendChild(phone);
		headerContainer.appendChild(email);
		headerContainer.appendChild(locale);
		headerContainer.appendChild(navbarMenu);

	return headerContainer;
};