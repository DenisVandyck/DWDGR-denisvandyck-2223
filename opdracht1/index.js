let carts = document.querySelectorAll('.add-cart');

let products = [
	{
		naam: '2022 Tiberius Vin de Pays d Oc Grenache - Viognier',
		tag: '2022 Tiberius Vin de Pays d Oc Grenache - Viognier',
		price: 6.85,
		inCart: 0
	},
	{
		naam: '2022 Le Bottle LE WHITE - Vin de Pays d Oc Grenache',
		tag: '2022 Le Bottle LE WHITE - Vin de Pays d Oc Grenache',
		price: 11.35,
		inCart: 0
	},
	{
		naam: '2022 Simonsig Rosé Chenin Blanc/Pinotage',
		tag: '2022 Simonsig Rosé Chenin Blanc/Pinotage',
		price: 8.99,
		inCart: 0
	},
	{
		naam: '2021 Les Sensibles Vin de Pays d Oc Syrah',
		tag: '2021 Les Sensibles Vin de Pays d Oc Syrah',
		price: 9.99,
		inCart: 0
	},
	{
		naam: '2021 Epicuro Conica Montepulciano d Abruzzo',
		tag: '2021 Epicuro Conica Montepulciano d Abruzzo',
		price: 17.85,
		inCart: 0
	},
	{
		naam: '2021 Epicuro Conica - SCREWCAP Montepulciano',
		tag: '2021 Epicuro Conica - SCREWCAP Montepulciano',
		price: 12.68,
		inCart: 0
	},
	{
		naam: '2021 Tiberius Vin de Pays d Oc Cinsault, Grenache Noir',
		tag: '2021 Tiberius Vin de Pays d Oc Cinsault, Grenache Noir',
		price: 7.55,
		inCart: 0
	},
	{
		naam: '2022 Tiberius Vin de Pays d Oc Cinsault, Grenache Noir ',
		tag: '2022 Tiberius Vin de Pays d Oc Cinsault, Grenache Noir',
		price: 18.99,
		inCart: 0
	},
	{
		naam: '2022 Casa Santiago Viña Requingua (Screwcap) Rosado',
		tag: '2022 Casa Santiago Viña Requingua (Screwcap) Rosado',
		price: 12.45,
		inCart: 0
	},

];

function setItems(products) {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);

	if (cartItems != null) {
		if (cartItems[products.tag] == undefined) {
			cartItems = {
				...cartItems,
				[products.tag]: products
			};
		}
		cartItems[products.tag].inCart += 1;
	} else {
		products.inCart = 1;
		cartItems = {
			[products.tag]: products
		};
	}

	localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function AantalNummers(products) {
	let ProductNummers = localStorage.getItem('cartNumbers');
	ProductNummers = parseInt(ProductNummers);

	if (ProductNummers) {
		localStorage.setItem('cartNumbers', ProductNummers + 1);
		document.querySelector('.number').textContent = ProductNummers + 1;
	} else {
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.number').textContent = 1;
	}

	setItems(products);
}


function Nummerhouden() {
	let ProductNummers = localStorage.getItem('cartNumbers');
	if (ProductNummers) {
		document.querySelector('.cart span').textContent = ProductNummers;
	}
}

function Totaal(products) {
	let cartCost = localStorage.getItem('totalCost');

	if (cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem('totalCost', cartCost + products.price);
	} else {
		localStorage.setItem('totalCost', products.price);
	}

}

function displayCart() {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	let productContainer = document.querySelector('.products');

	if (cartItems && productContainer) {
		productContainer.innerHTML = '';
		Object.values(cartItems).map(item => {
			productContainer.innerHTML += `
        <div class="product">
            <i class="bi bi-x-circle-fill"></i>
            <span>€${item.naam}</span>
        </div>
        <div class="prijs">${item.prijs}</div>
        <div class="hoeveelheid">
            <i class="bi bi-arrow-left-square-fill"></i>
            <span>${item.inCart}</span><i class="bi bi-arrow-right-square-fill"></i>
        </div>
        <div class="totaal">
            €${item.inCart * item.prijs}
        </div>
        `;

		});
	}
}

for (let i = 0; i < carts.length; i++) {
	carts[i].addEventListener('click', () => {
		AantalNummers(products[i]);
		Totaal(products[i]);
	});
}

Nummerhouden();
displayCart();

