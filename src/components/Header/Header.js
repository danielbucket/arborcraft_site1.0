import './style.css';
import navbarCompiler from './Navbar/navbarCompiler.js';
import navbarDropMenu from './Navbar/navbarCompiler.js';
import navbarData from './navbarData.js';
import HeaderLogo from './HeaderLogo/HeaderLogo.js';
import ContactInfo from './ContactInfo/ContactInfo.js';

export default function Header(screenWidth) {
	const { phone, email, locale, contactInfo } = ContactInfo;
	const logo = HeaderLogo(screenWidth);

	const headerContainer = document.createElement('header');
		headerContainer.classList.add('header-container', 'main-page-layout');
		headerContainer.appendChild(logo);

		if (screenWidth <= 400) {
			headerContainer.appendChild(phone);
			headerContainer.appendChild(navbarDropMenu);
		} else if (screenWidth > 400) {
			headerContainer.appendChild(navbarCompiler);
		};



	return headerContainer;
};