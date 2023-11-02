import MapContainer from '../GoogleMap/MapContainer';

const aboutUsBody = () => {
	const container = document.createElement('div');
		container.classList.add('about-us-body', 'slide-card-body');
		container.innerHTML = "We're not your typical do it fast and do it dirty tree care company. At ArborCraft we take the time to do the job thoroughly and do it well. Our staff is comprised of educated and experienced individuals who know the importance of safety for themselves as tree workers as well as the safety for you and your property. \<br>We base our reputation on doing the job right the first time.";
	return container;
};

const servicesBody = () => {
	const container = document.createElement('div');
		container.classList.add('services-body', 'slide-card-body');
		container.innerHTML = "Tree Pruning, \<br>Trimming, \<br>Removals, \<br>PPlanting, \<br> Nutrition and Care";
	return container;
};

const reviewsBody = () => {
	const container = document.createElement('div');
		container.classList.add('reviews-body', 'slide-card-body');

	const statement = document.createElement('div');
		statement.classList.add('review-statement', 'body-header');
		statement.innerHTML = "They's danged good at cuttin' at an' swingin 'round' in them trees. Danged good. You can quote me on that!"

	const author = document.createElement('div');
		author.classList.add('review-author');
		author.innerHTML = "Abraham Lincoln";

	container.appendChild(statement);
	container.appendChild(author);

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
		body: reviewsBody(),
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

export default slideData;


