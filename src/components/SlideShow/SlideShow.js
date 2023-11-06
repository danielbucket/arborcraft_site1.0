import MapContainer from '../GoogleMap/MapContainer';
import { reviewsStubArr } from './reviewsStub.js';
const ownerPhoto = require('../../assets/images/selfi-2.jpg');
const acLogo = require('../../assets/logos/arborcraftTree.png');
import './SlideShow.css';
import './slideshow-portfolio.css';
import './slideshow-reviews.css';

const SlideShow = () => {
	const slideShowContainer = document.createElement('div');
		slideShowContainer.classList.add('slide-show-container');

	const aboutUsBody = () => {
		const container = document.createElement('div');
			container.classList.add('about-us-body-container', 'topic-card-body');

		const header = document.createElement('div');
			header.classList.add('about-us-slide-header');
			header.innerHTML = "We're not your typical do it fast and do it dirty tree care company. At ArborCraft we take the time to do the job thoroughly and do it well. We base our reputation on doing the job right the first time.";

		const logo = new Image();
			logo.src = acLogo;
			logo.classList.add('about-us-slide-logo');

		container.appendChild(logo);
		container.appendChild(header);
		return container;
	};

	const servicesBody = () => {
		const container = document.createElement('div');
			container.classList.add('services-body-container', 'topic-card-body');
			container.innerHTML = "Tree Pruning, Trimming, Removals, Planting, Nutrition and Care";
		return container;
	};

	const portfolioBody = () => {
		const container = document.createElement('div');
			container.classList.add('portfolio-body-container', 'topic-card-body');

			const photo = new Image();
				photo.src = ownerPhoto;
				photo.classList.add('owner-portfolio-img');

		const portfolioText = document.createElement('div');
			portfolioText.classList.add('portfolio-text');
			portfolioText.innerHTML = "Daniel Ludwick\<br>Owner/Operator"

		container.appendChild(photo);
		container.appendChild(portfolioText)
		return container;
	};

	const resourcesBody = () => {
		const container = document.createElement('div');
			container.classList.add('resources-body-container','topic-card-body');
			container.innerHTML = "Resources";
		return container;
	};

	const reviewsBody = (data) => {
		const reviewsBodyContainer = document.createElement('div');
			reviewsBodyContainer.classList.add('reviews-body-container');

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

	const slideData = [
		{
			slideName: "about-us",
			headerText: "About Us",
			cardElement: aboutUsBody(),
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
			slideName: "portfolio",
			headerText: "Portfolio",
			cardElement: portfolioBody(),
		},
		{
			slideName: "resources",
			headerText: "Resources",
			cardElement: resourcesBody(),
		},
		{
			slideName: "service-area",
			headerText: "Serving Golden, Colorado, \<br>and Denver's western 'burbs",
			cardElement: MapContainer(),
		},
	];

	const slideshow = slideData.map(topic => {
		const { slideName, cardElement, headerText } = topic;

		const topicContainer = document.createElement('div');
			topicContainer.classList.add('slide-topic-container', slideName + "-container");

		const topicHeader = document.createElement('div');
			topicHeader.classList.add('topic-header');
			topicHeader.innerHTML = headerText;

		const topicBody = document.createElement('div');
			topicBody.classList.add('topic-card-body');
			topicBody.appendChild(cardElement);

		topicContainer.appendChild(topicHeader);
		topicContainer.appendChild(topicBody);

		return topicContainer;
	}); // end booty. returns an array of cards

	slideshow.map(i => slideShowContainer.appendChild(i));

	return slideShowContainer;
};

export default SlideShow;