const serviceEndPoint = "https://formsubmit.co/admin@arborcrafttreeservice.com";
import { v4 as uuidv4 } from 'uuid';
const username = process.env.EMAIL_ADDR;
const password = process.env.EMAIL_PASS;

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