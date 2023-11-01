import style from './underConstructionPopup.css';
const githubImg = require('../../assets/images/github/github-mark.png');
const closeBtnIcon = require('../../assets/icons/close-button.png');

const handleClick = () => {
	const moduleContainer = document.getElementById('container_display_toggle');
		moduleContainer.classList.add('display-toggle-none');
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
		container.classList.add('popup-header');
		container.innerHTML = "Website Under Construction";
	return container;
};

const popupBody = () => {
	const container = document.createElement('div');
		container.classList.add('popup-body');
		container.innerHTML = "Please forgive the hiccups! \<br>This Website is made by me from scratch, one line of code at a time. \<br>I'll be pushing updates as I continue to refine this project. \<br>Click the link below to check out my GitHub repository.";
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