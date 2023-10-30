import './header.style.css';
import headerLogo from './headerLogo/headerLogo.js';
import contactInfo from './contactInfo/contactInfo.js';

export default function Header() {
	const { phone, email } = contactInfo;

	const headerContainer = document.createElement('header');
		headerContainer.classList.add('header-container');
		headerContainer.appendChild(phone);
		headerContainer.appendChild(headerLogo);
		headerContainer.appendChild(email);

	return headerContainer;
};