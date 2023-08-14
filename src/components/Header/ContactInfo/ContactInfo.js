import "./style.css";
const emailTo = "daniel@arborcrafttreeservice.com";
const companyPhone = "(303) 847-5786";

export default function ContactInfo() {
	const locale = document.createElement('div');
		locale.classList.add('locale');
		locale.innerHTML = "Golden, CO";

	const contactInfo = document.createElement('address');
		contactInfo.classList.add('contact-info-container');

	const email = document.createElement('a');
		email.classList.add('email');
		email.innerHTML = "Email Us!";
		email.href = `mailto:${emailTo}`;

	const phoneNumber = document.createElement('a');
		phoneNumber.classList.add('phone-number');
		phoneNumber.innerHTML = companyPhone;
		phoneNumber.href = "tel:+13038475786";

		contactInfo.appendChild(phoneNumber);
		contactInfo.appendChild(email);
		contactInfo.appendChild(locale);

	return contactInfo;
}