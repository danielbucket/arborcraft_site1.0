import { servicesStub } from './servicesStub.js';
import style from './services.style.css';

export const services = () => {
	const servicesBodyContainer = document.createElement('div');
		servicesBodyContainer.classList.add('services-body-container', 'slide-topic-card-body');

		const servicesCardArr = servicesStub.map((i,num) => {
			const { header, body } = i;

			const serviceCardContainer = document.createElement('div');
				serviceCardContainer.classList.add('service-card-container');

			const headerText = document.createElement('div');
				headerText.classList.add('service-type-header-text');
				headerText.innerHTML = header;

			const bodyText = document.createElement('div');
				bodyText.classList.add('service-type-body-text');
				bodyText.innerHTML = body;

			serviceCardContainer.appendChild(headerText);
			serviceCardContainer.appendChild(bodyText);

			return serviceCardContainer;
		});

	servicesCardArr.map(i => servicesBodyContainer.appendChild(i));
	return servicesBodyContainer;
};