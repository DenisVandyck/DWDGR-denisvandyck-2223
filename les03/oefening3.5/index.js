const form = document.getElementById('Formulier');
const name = form.elements.name;
const gsm = form.elements.phone;
const email = form.elements.email;
const onderwerp = form.elements.subject;
const message = form.elements.message;
const attachment = form.elements.attachment;

form.addEventListener('submit', (event) => {
	event.preventDefault();

	if (!name.validity.valid) {
		alert('Naam is verplicht.');
		return;
	}

	if (!gsm.validity.valid) {
		alert('GSM nummer is verplicht');
		return;
	}

	if (!email.validity.valid) {
		alert('E-mail moet een geldig formaat hebben.');
		return;
	}

	if (!onderwerp.validity.valid) {
		alert('Onderwerp is verplicht.');
		return;
	}

	if (!message.validity.valid){
		alert('Bericht is verplicht.');
		return;
	}

	if (!attachment.validity.valid) {
		alert('Er is een bestandt nodig.');
		return;
	}
});