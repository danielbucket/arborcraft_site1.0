import { reviewsStubArr } from './reviewsStub.js';
import ServiceAreaMap from '../GoogleMap/ServiceAreaMap.js';
const ownerPhoto = require('../../assets/images/selfi-2.jpg');
const acLogo = require('../../assets/logos/arborcraftTree.png');

import './SlideShow.style.css';
import './slideshow-aboutUs.style.css';
import './slideshow-services.style.css';
import './slideshow-portfolio.style.css';
import './slideshow-resources.style.css';
import './slideshow-reviews.style.css';
import './slideshow-serviceMap.style.css';

const SlideShow = () => {
	const slideShowContainer = document.createElement('div');
		slideShowContainer.classList.add('slide-show-container');

	const aboutUsBody = () => {
		const container = document.createElement('div');
			container.classList.add('about-us-container', 'slide-topic-card-body');

		const text = document.createElement('div');
			text.classList.add('about-us-text');
			text.innerHTML = "We're not your typical do it fast and do it dirty tree care company. At ArborCraft we take the time to do the job thoroughly and do it well. We base our reputation on doing the job right the first time.";

		const logo = new Image();
			logo.src = acLogo;
			logo.classList.add('about-us-logo');

		container.appendChild(logo);
		container.appendChild(text);
		return container;
	};

	const servicesBody = () => {
		const container = document.createElement('div');
			container.classList.add('services-body-container', 'slide-topic-card-body');
			container.innerHTML = "Tree Pruning, Trimming, Removals, Planting, Nutrition and Care";
		return container;
	};

	const portfolioBody = () => {
		const container = document.createElement('div');
			container.classList.add('portfolio-container', 'slide-topic-card-body');

		const photo = new Image();
			photo.src = ownerPhoto;
			photo.classList.add('portfolio-img');

		const portfolioText = document.createElement('div');
			portfolioText.classList.add('portfolio-text');
			portfolioText.innerHTML = "Daniel Ludwick\<br>Owner/Operator"

		container.appendChild(photo);
		container.appendChild(portfolioText)
		return container;
	};

	const resourcesBody = () => {
		const container = document.createElement('div');
			container.classList.add('resources-body-container','slide-topic-card-body');
			container.innerHTML = "Resources are coming";
		return container;
	};

	const reviewsBody = (data) => {
		const reviewsBodyContainer = document.createElement('div');
			reviewsBodyContainer.classList.add('reviews-body-container', 'slide-topic-card-body');

		const reviewCardsArr = data.map((i,num) => {
			const { review, author } = i;
			const reviewCardContainer = document.createElement('div');
				reviewCardContainer.classList.add('review-card-container');
				reviewCardContainer.id = num;

			const reviewText = document.createElement('div');
				reviewText.classList.add('review-text');
				reviewText.innerHTML = review;

			const authorText = document.createElement('div');
				authorText.classList.add('author-text');
				authorText.innerHTML = "-" + author;

			reviewCardContainer.appendChild(reviewText);
			reviewCardContainer.appendChild(authorText);

			return reviewCardContainer;
		});

		reviewCardsArr.map(i => reviewsBodyContainer.appendChild(i));
		return reviewsBodyContainer;
	};

	const mapBody = (mapObj) => {
		const container = document.createElement('div');
			container.classList.add('map-container', 'topic-card-body');
			container.id = 'service_map';

		mapObj();
		return container;
	};

	const slideData = [
		{
			slideName: "about-us",
			headerText: "About Us",
			cardElement: aboutUsBody(),
		},
		{
			slideName: "portfolio",
			headerText: "Portfolio",
			cardElement: portfolioBody(),
		},
		{
			slideName: "services",
			headerText: "Services",
			cardElement: servicesBody(),
		},
		{
			slideName: "reviews",
			headerText: "Reviews",
			cardElement: reviewsBody(reviewsStubArr),
		},
		{
			slideName: "resources",
			headerText: "Resources",
			cardElement: resourcesBody(),
		},
		{
			slideName: "service-area",
			headerText: "Serving Golden, Colorado, \<br>and Denver's western 'burbs",
			cardElement: mapBody(ServiceAreaMap),
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