import style from './reviews.style.css';
import { reviewsStub } from './reviewsStub.js';

export const reviews = () => {
	const reviewsBodyContainer = document.createElement('div');
		reviewsBodyContainer.classList.add('reviews-body-container', 'slide-topic-card-body');

	const reviewsCardArr = reviewsStub.map((i,num) => {
		const { review, author } = i;

		const reviewCardContainer = document.createElement('div');
			reviewCardContainer.classList.add('review-card-container');

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

	reviewsCardArr.map(i => reviewsBodyContainer.appendChild(i));
	return reviewsBodyContainer;
};