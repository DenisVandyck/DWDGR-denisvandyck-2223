let hoeveelheidPriemgetallen = 1000005;
let positie = 33;

function PriemgetallenInArray(priemgetallen) {
	let IsPriem = Array(hoeveelheidPriemgetallen).fill(true);
	let p, i;
	for (p = 2; p * p < hoeveelheidPriemgetallen; p++) {
		if (IsPriem[p] == true) {
			for (i = p * p; i < hoeveelheidPriemgetallen; i += p)
				IsPriem[i] = false;
		}
	}
	for (p = 2; p < hoeveelheidPriemgetallen; p++)
		if (IsPriem[p])
			priemgetallen.push(p);
}

let priemgetallen = [];
PriemgetallenInArray(priemgetallen);
console.log(positie + 'de priemgetal is ' + priemgetallen[positie - 1]);