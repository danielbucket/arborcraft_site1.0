const serviceEndPoint = "https://formsubmit.co/admin@arborcrafttreeservice.com";
import { v4 as uuidv4 } from 'uuid';
const username = 'danieljbucket@gmail.com';
const password = 'D1EA804E30D5C5D9F93EFF333ACF2BD67B8C';

function submitContactForm(formObj) {
	Email.send({
		Host : "smtp.elasticemail.com",
    Username : username,
    Password : password,
    To : username,
    From : formObj.email,
    Subject : "NEW CLIENT CONTACT",
    Body : formObj.message
	})
	.then(message => alert(message))
};

export default submitContactForm;