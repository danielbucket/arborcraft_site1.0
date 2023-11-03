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
			container.innerHTML = "We're not your typical do it fast and do it dirty tree care company. At ArborCraft we take the time to do the job thoroughly and do it well. Our staff is comprised of educated and experienced individuals who know the importance of safety for themselves as tree workers as well as the safety for you and your property. We base our reputation on doing the job right the first time.";
		return container;
	};

	const servicesBody = () => {
		const container = document.createElement('div');
			container.classList.add('services-body', 'slide-card-body');
			container.innerHTML = "Tree Pruning, Trimming, Removals, Planting, Nutrition and Care";
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
	};// end reviewsBody() returns a single parent element with childnodes

	const slideData = [
		// {
		// 	slideName: "service-area",
		// 	headerText: "Serving Golden, Colorado, \<br>and Denver's western 'burbs",
		// 	bodyElement: MapContainer(),
		// },
		{
			slideName: "about-us",
			headerText: "About Us",
			bodyElement: aboutUsBody(),
		},
		// {
		// 	slideName: "services",
		// 	headerText: "Services",
		// 	bodyElement: servicesBody(),
		// },
		// {
		// 	slideName: "reviews",
		// 	headerText: "Reviews",
		// 	bodyElement: reviewsBody(reviewsStubArr),
		// },
		// {
		// 	slideName: "portfolio",
		// 	headerText: "Portfolio",
		// 	bodyElement: portfolioBody(),
		// },
		// {
		// 	slideName: "resources",
		// 	headerText: "Resources",
		// 	bodyElement: resourcesBody(),
		// }
	];

	const slideshow = slideData.map(topic => {
		const { slideName, bodyElement, headerText } = topic;
		// console.log('slideName: ', slideName)
		// console.log('bodyElement: ', bodyElement)
		// console.log('headerText: ', headerText)
		const slidesContainer = document.createElement('div');
			slidesContainer.classList.add('slides-container', slideName + "-container");

		const topicHeader = document.createElement('div');
			topicHeader.classList.add('topic-header');
			topicHeader.innerHTML = headerText;
			topicHeader.appendChild(swipeBtnLeft());
			topicHeader.appendChild(swipeBtnRight());

		const topicBody = document.createElement('div');
			topicBody.classList.add('topic-body');
			topicBody.innerHTML = bodyElement;

		slidesContainer.appendChild(topicHeader);
		slidesContainer.appendChild(topicBody);

		return slidesContainer;
	}); // end booty. returns an array of cards

	slideshow.map(i => slideShowContainer.appendChild(i));
	return slideShowContainer;
};

export default SlideShow;