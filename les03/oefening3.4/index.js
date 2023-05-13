
const lettergrepen = ['aka', 'mo', 'tor', 'vik', 'ad', 'il', 'hin', 'ne', 'fo', 'ol', 'pop', 'ter', 'dik', 'pas', 'mat', 'vil', 'ep', 'rem', 'bo', 'lom', 'bar', 'ola', 'ede', 'par', 'kit', 'gi'];

function getRandNumber() {
	return Math.floor(Math.random() * lettergrepen.length);
}

function generateName() {
	const firstname = lettergrepen[getRandNumber()] + lettergrepen[getRandNumber()];

	const lastname = lettergrepen[getRandNumber()] + lettergrepen[getRandNumber()] + lettergrepen[getRandNumber()];

	return `${firstname} ${lastname}`;
}

function createStudent(number, name, moment) {
	const student = new Object();
	student.nummer = `NR-${number}`;
	student.name = name;
	student.moment = moment;
	return student;
}

function maakKlas(aantal, moment) {
	const klas = [];

	for (let index = 0; index < aantal; index++) {
		klas.push(createStudent(index + 1, generateName(), moment));
	}

	return klas;
}

function toonStudent(nummer, klas) {
	console.log(klas[nummer]);
}

function kiesStudent(klas) {
	return Math.floor(Math.random() * klas.length);
}

function toonWillekeurigStudent(klas) {
	toonStudent(kiesStudent(klas), klas);
}

const klasAvond = maakKlas(10, 'avond');
const klasDag = maakKlas(20, 'dag');

for (let index = 0; index < 10; index++) {
	toonWillekeurigStudent(klasAvond);
}

for (let index = 0; index < 10; index++) {
	toonWillekeurigStudent(klasDag);
}