import style from './underConstructionPopup.css';
const githubImg = require('../../assets/images/github/github-mark.png');
const closeBtnIcon = require('../../assets/icons/close-button.png');

const handleClick = () => {
	const moduleContainer = document.getElementById('container_display_toggle');
		moduleContainer.setAttribute('style', 'display: none')
};

const closePopUpButton = () => {
	const button = new Image();
		button.src = closeBtnIcon;
		button.classList.add('close-button');
		button.addEventListener("click", e => handleClick(e));
	return button;
};

const popupHeader = () => {
	const container = document.createElement('div');
		container.classList.add('popup-header-container');

	const header = document.createElement('h1');
		header.classList.add('popup-header');
		header.innerHTML = "This site is under construction";

	const p = document.createElement('p');
		p.classList.add('popup-header-p');
		p.innerHTML = "( But it's still functional! )"

	container.appendChild(header);
	container.appendChild(p);
	return container;
};

const popupBody = () => {
	const container = document.createElement('div');
		container.classList.add('popup-body-container');

		const p1 = document.createElement('p');
			p1.classList.add('popup-body');
			p1.innerHTML = "Please forgive the hiccups!"
		const p2 = document.createElement('p');
			p2.classList.add('popup-body');
			p2.innerHTML = "This website was made by me from scratch, one line of code at a time. \<br>I'm still making updates."
		const p3 = document.createElement('p');
			p3.classList.add('popup-body');
			p3.innerHTML = "If you're interested, click the link below to check out the source code on GitHub.";

		container.appendChild(p1);
		container.appendChild(p2);
		container.appendChild(p3);

	return container;
}

const githubLink = () => {
	const container = document.createElement('div');
		container.classList.add('github-link-container');
		container.addEventListener('click', () => {
			window.open('https://github.com/danielbucket', '_blank');
		});

	const githubText = document.createElement('div');
		githubText.classList.add('github-text');
		githubText.innerHTML = "@danielbucket";

	const githubIcon = new Image();
		githubIcon.src = githubImg;
		githubIcon.classList.add('github-icon');

	container.appendChild(githubText);
	container.appendChild(githubIcon);

	return container;
};


export default function UnderConstructionPopup() {
	const positioningContainer = document.createElement('div');
		positioningContainer.classList.add('positioning-container');
		positioningContainer.id = "container_display_toggle";

	const container = document.createElement('div');
		container.classList.add('popup-container');

	container.appendChild(closePopUpButton());
	container.appendChild(popupHeader());
	container.appendChild(popupBody());
	container.appendChild(githubLink());
	positioningContainer.appendChild(container);

	return positioningContainer;
};