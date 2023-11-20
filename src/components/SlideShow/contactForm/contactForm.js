import style from './contactForm.style.css';

export class contactForm {
	constructor() {
		this.name = "Name";
		this.email = "Email";
		this.message = "Tell us what you need done";

		this.requestForm = this.requestForm.bind(this);
		this.handleState = this.handleState.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleState(e) {
		e.preventDefault();
		const stateName = e.target.name;
		const value = e.target.value;
		this[stateName] = value;
	};

	handleSubmit() {
		const { name, email, message } = this;
		const requestObj = { name, email, message };
		console.log(requestObj);
	};

	requestForm() {
		const container = document.createElement('div');
			container.classList.add('request-form-container');
			container.id = 'request_form';

		const nameInput = document.createElement('input');
			nameInput.classList.add('name-input', "form-item");
			nameInput.type = "text";
			nameInput.id = "name_input";
			nameInput.name = "name";
			nameInput.maxlength = "30";
			nameInput.required = true;
			nameInput.placeholder = this.name;
			nameInput.addEventListener("keyup", (e) => this.handleState(e));

		const emailInput = document.createElement('input');
			emailInput.classList.add('email-input', "form-item");
			emailInput.type = "email";
			emailInput.id = "email";
			emailInput.name = "email";
			emailInput.required = true;
			emailInput.placeholder = this.email;
			emailInput.addEventListener("keyup", (e) => this.handleState(e));

		const messageInput = document.createElement('input');
			messageInput.classList.add('message-input', "form-item");
			messageInput.type = "text";
			messageInput.id = "message";
			messageInput.name = "message";
			messageInput.maxlength = "150";
			messageInput.required = true;
			messageInput.placeholder = this.message;
			messageInput.addEventListener("keyup", (e) => this.handleState(e));

		const submitBtn = document.createElement('button');
			submitBtn.classList.add('submit-btn', 'form-item');
			submitBtn.innerText = "Submit"
			submitBtn.addEventListener('click', () => this.handleSubmit())

		container.appendChild(nameInput);
		container.appendChild(emailInput);
		container.appendChild(messageInput);
		container.appendChild(submitBtn);

		return container;
	};
};