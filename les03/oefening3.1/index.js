// Selecteer het element met het id container, zonder gebruik te maken van de querySelector
const container = document.getElementById('container');
console.log(container);

// Selecteer het element met het id container, door gebruik te maken van de querySelector
const container2 = document.querySelector('#container');
console.log(container2);

// Selecteer alle h3 tags
const h3 = document.querySelectorAll('h3');
for (let i of h3) {
	console.log(i.innerText);
}

// Selecteer alle beschrijvingen van de drama films
const drama = document.querySelectorAll('#drama .lead');
for (let i of drama) {
	console.log(i.innerText);
}

// Selecteer de sectie met id comedy
const comedy = document.querySelector('#comedy');
console.log(comedy);

// Selecteer alle buttons
const buttons = document.querySelectorAll('button');
for (let i of buttons) {
	console.log(i.innerText);
}

// Selecteer de eerste filmtitel van elke type
const eerst = document.querySelectorAll('.row .col-4:first-child .card h3');
for (let i of eerst) {
	console.log(i.innerText);
}

// Geef het gemiddelde van alle sterren
const sterren = document.querySelectorAll('.stars');
let sterrenAantal = 0;

for (let i = 0; i < sterren.length; i++) {
	sterrenAantal += parseFloat(sterren[i].innerText);
}
console.log(sterrenAantal / sterren.length);






