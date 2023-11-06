import style from './resources.style.css';

export const resources = () => {
	const container = document.createElement('div');
		container.classList.add('resources-body-container','slide-topic-card-body');
		container.innerHTML = "Resources are coming";
	return container;
};