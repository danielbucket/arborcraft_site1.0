import './header.style.css'
const icon_noTree = require('../../assets/logos/arborcraft.png')
import contactInfo from './contactInfo/contactInfo.js'

export default function Header() {
	const { email } = contactInfo

	const headerContainer = document.createElement('div')
		headerContainer.classList.add('header-container')
		
	const logo = new Image()
		logo.classList.add('header-logo')
		logo.src = icon_noTree
		
	const logoContainer = document.createElement('div')
		logoContainer.classList.add('header-logo-container')
		logoContainer.appendChild(logo)
		
	const emailContainer = document.createElement('div')
		emailContainer.classList.add('email-container')
		emailContainer.appendChild(email)

		
	headerContainer.appendChild(logoContainer)
	headerContainer.appendChild(emailContainer)

	return headerContainer
}