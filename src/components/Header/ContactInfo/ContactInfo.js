import "./style.css";
const emailTo = "daniel@arborcrafttreeservice.com";
const companyPhone = "(303) 847-5786";
const phoneImage = require('../../../assets/images/phone.svg');

const ContactInfo = () => {
	const locale = document.createElement('div');
				locale.classList.add('locale');
				locale.innerHTML = "Golden, CO";

	const contactInfo = document.createElement('address');
		contactInfo.classList.add('contact-info-container');

	const email = document.createElement('a');
				email.classList.add('email');
				email.innerHTML = "Email Us!";
				email.href = `mailto:${emailTo}`;


	const phoneIcon = new Image();
				phoneIcon.src = phoneImage;
				phoneIcon.classList.add('phone-icon');

	const phoneNumber = document.createElement('a');
				phoneNumber.classList.add('phone-number');
				phoneNumber.innerHTML = companyPhone;
				phoneNumber.href = "tel:+13038475786";

	const phoneNumberContainer = document.createElement('div');
				phoneNumberContainer.classList.add('phone-number-container');
				phoneNumberContainer.appendChild(phoneIcon);
				phoneNumberContainer.appendChild(phoneNumber);

	contactInfo.appendChild(phoneNumberContainer);
	// contactInfo.appendChild(locale);
	// contactInfo.appendChild(email);

	return contactInfo;
};

export default ContactInfo();