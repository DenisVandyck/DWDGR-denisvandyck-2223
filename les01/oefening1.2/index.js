let aantalPriem = 10000;
let positie = 33;

function PriemgetallenInArray(priemgetallen) {
	let IsPriem = Array(aantalPriem).fill(true);
	let p, i;
	for (p = 2; p * p < aantalPriem; p++) {
		if (IsPriem[p] == true) {
			for (i = p * p; i < aantalPriem; i += p)
				IsPriem[i] = false;
		}
	}
	for (p = 2; p < aantalPriem; p++)
		if (IsPriem[p])
			priemgetallen.push(p);
}

let priemgetallen = [];
PriemgetallenInArray(priemgetallen);
console.log(positie + 'de priemgetal is ' + priemgetallen[positie - 1]);