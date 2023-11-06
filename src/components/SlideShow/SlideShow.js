import { services } from './services/services.js';
import { reviews } from './reviews/reviews.js';
import { aboutUs } from './aboutUs/aboutUs.js';
import { portfolio } from './portfolio/portfolio.js';
import { resources } from './resources/resources.js';
import { googleMap } from './googleMap/googleMap.js';
import './slideShow.style.css';

const SlideShow = () => {
	const slideShowContainer = document.createElement('div');
		slideShowContainer.classList.add('slide-show-container');

	const slideData = [
		{
			slideName: "about-us",
			headerText: "About Us",
			cardElement: aboutUs(),
		},
		{
			slideName: "portfolio",
			headerText: "Portfolio",
			cardElement: portfolio(),
		},
		{
			slideName: "services",
			headerText: "Services",
			cardElement: services(),
		},
		{
			slideName: "reviews",
			headerText: "Reviews",
			cardElement: reviews(),
		},
		{
			slideName: "resources",
			headerText: "Resources",
			cardElement: resources(),
		},
		{
			slideName: "service-area",
			headerText: "Serving Golden, Colorado, \<br>and Denver's western 'burbs",
			cardElement: googleMap(),
		},
	];

	const slideshow = slideData.map(topic => {
		const { slideName, cardElement, headerText } = topic;

		const topicContainer = document.createElement('div');
			topicContainer.classList.add('slide-topic-container');

		const topicHeader = document.createElement('div');
			topicHeader.classList.add('slide-topic-header');
			topicHeader.innerHTML = headerText;

		const topicBody = document.createElement('div');
			topicBody.classList.add('slide-topic-body');
			topicBody.appendChild(cardElement);

		topicContainer.appendChild(topicHeader);
		topicContainer.appendChild(topicBody);

		return topicContainer;
	});

	slideshow.map(i => slideShowContainer.appendChild(i));

	return slideShowContainer;
};

export default SlideShow;