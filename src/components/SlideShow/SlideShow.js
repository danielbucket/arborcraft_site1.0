import MapContainer from '../GoogleMap/MapContainer';
import { reviewsStubArr } from './reviewsStub.js';
import style from './SlideShow.css';

const leftBtnIcon = require('../../assets/icons/left-arrow-acBlue.png');
const rightBtnIcon = require('../../assets/icons/right-arrow-acBlue.png');


const SlideShow = () => {
	const slideShowContainer = document.createElement('div');
		slideShowContainer.classList.add('slide-show-container');

	const swipeBtnLeft = () => {
		const leftBtn = new Image();
			leftBtn.src = leftBtnIcon;
			leftBtn.classList.add('swipe-button', 'left-btn');

		return leftBtn;			
	};

	const swipeBtnRight = () => {
		const rightBtn = new Image();
			rightBtn.src = rightBtnIcon;
			rightBtn.classList.add('swipe-button', 'right-btn');

		return rightBtn;
	};

	const aboutUsBody = () => {
		const container = document.createElement('div');
			container.classList.add('about-us-body', 'slide-card-body');
			container.innerHTML = "We're not your typical do it fast and do it dirty tree care company. At ArborCraft we take the time to do the job thoroughly and do it well. Our staff is comprised of educated and experienced individuals who know the importance of safety for themselves as tree workers as well as the safety for you and your property. \<br>We base our reputation on doing the job right the first time.";
		return container;
	};

	const servicesBody = () => {
		const container = document.createElement('div');
			container.classList.add('services-body', 'slide-card-body');
			container.innerHTML = "Tree Pruning, \<br>Trimming, \<br>Removals, \<br>Planting, \<br> Nutrition and Care";
		return container;
	};

	const portfolioBody = () => {
		const container = document.createElement('div');
			container.classList.add('portfolio-body', 'slide-card-body');
			container.innerHTML = "Portfolio";
		return container;
	};

	const resourcesBody = () => {
		const container = document.createElement('div');
			container.classList.add('resources-body','slide-card-body');
			container.innerHTML = "Resources";
		return container;
	};

	const reviewsBody = (data) => {
		const reviewsBodyContainer = document.createElement('div');
			reviewsBodyContainer.classList.add('slide-card-body', 'reviews-body-container');

		const reviewCardsArr = data.map((i,num) => {
			const { review, author } = i;

			const cardContainer = document.createElement('div');
				cardContainer.classList.add('review-card-container');
				cardContainer.id = num;

			const reviewText = document.createElement('div');
				reviewText.classList.add('review-text');
				reviewText.innerHTML = review;

			const authorText = document.createElement('div');
				authorText.classList.add('author-text');
				authorText.innerHTML = author;

			cardContainer.appendChild(reviewText);
			cardContainer.appendChild(authorText);

			return cardContainer;
		});

		reviewCardsArr.map(i => reviewsBodyContainer.appendChild(i));
		return reviewsBodyContainer;
	}; // end reviewsBody() return single element



	const slideData = [
		{
			slideName: "service-area",
			header: "Serving Golden, Colorado, \<br>and Denver's western 'burbs",
			body: MapContainer(),
		},
		{
			slideName: "about-us",
			header: "About Us",
			body: aboutUsBody(),
		},
		{
			slideName: "services",
			header: "Services",
			body: servicesBody(),
		},
		{
			slideName: "reviews",
			header: "Reviews",
			body: reviewsBody(reviewsStubArr),
		},
		{
			slideName: "portfolio",
			header: "Portfolio",
			body: portfolioBody(),
		},
		{
			slideName: "resources",
			header: "Resources",
			body: resourcesBody(),
		}
	];

	const booty = slideData.map(topic => {
		const slidesContainer = document.createElement('div');
			slidesContainer.classList.add('slides-container', topic.slideName+"-container");

		const slideTopicHeader = document.createElement('div');
			slideTopicHeader.classList.add('slide-topic-header');
			slideTopicHeader.innerHTML = topic.header;
			slideTopicHeader.appendChild(swipeBtnLeft());
			slideTopicHeader.appendChild(swipeBtnRight());

		const slideTopicBody = document.createElement('div');
			slideTopicBody.classList.add('slide-topic-body');
			slideTopicBody.innerHTML = topic.body;

		slidesContainer.appendChild(slideTopicHeader);
		slidesContainer.appendChild(slideTopicBody);

		return slidesContainer;
	}); // end booty. returns an array of cards


	booty.map(i => slideShowContainer.appendChild(i));
	return slideShowContainer;
};

export default SlideShow;