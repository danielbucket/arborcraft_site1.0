import "./style.css";
const emailTo = "daniel@arborcrafttreeservice.com";
const companyPhone = "(303) 847-5786";
const phoneImage = require('../../../assets/images/phone.svg');

const ContactInfo = () => {
	const contactInfo = document.createElement('address');
		contactInfo.classList.add('contact-info-container');

	const phoneIcon = new Image();
		phoneIcon.src = phoneImage;
		phoneIcon.classList.add('phone-icon');

	const phoneNumber = document.createElement('a');
		phoneNumber.classList.add('phone-number');
		phoneNumber.innerHTML = companyPhone;
		phoneNumber.href = "tel:+13038475786";

	const phone = document.createElement('div');
		phone.classList.add('phone-number-container');
		phone.appendChild(phoneIcon);
		phone.appendChild(phoneNumber);

	const email = document.createElement('a');
		email.classList.add('email');
		email.innerHTML = "Email Us!";
		email.href = `mailto:${emailTo}`;

	const locale = document.createElement('div');
		locale.classList.add('locale');
		locale.innerHTML = "Golden, CO";

	return {
		phone,
		email,
		locale,
		contactInfo
	};
};

export default ContactInfo();