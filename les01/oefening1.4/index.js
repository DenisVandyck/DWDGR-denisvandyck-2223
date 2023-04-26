//Deel 1

const lettergrepen = ['aba', 'eze', 'ur', 'opo', 'omo', 'uwu', 'aza', 'uvu', 'ana', 'iki', 'um', 'ol', 'om', 'usu', 'an', 'em', 'ug', 'il', 'aca', 'ere', 'ibi', 'opo', 'ozo', 'uxu', 'un', 'ud'];
const klas = [

	{
		nummer: 'NR-01',
		naam: 'abaeze uropoomo'
	},
    
	{
		nummer: 'NR-02',
		naam: 'ezeur opoomouwu'
	},
      
	{
		nummer: 'NR-03',
		naam: 'uwuaba urezeaza'
	},
      
	{
		nummer: 'NR-04',
		naam: 'ikium olomusu'
	},
      
	{
		nummer: 'NR-05',
		naam: 'omouwu uvuabaur'
	},
      
	{
		nummer: 'NR-06',
		naam: 'opouxu ozounud'
	},
      
	{
		nummer: 'NR-07',
		naam: 'umiki anauwuaza'
	},
      
	{
		nummer: 'NR-08',
		naam: 'ugil emanaba'
	},
      
	{
		nummer: 'NR-09',
		naam: 'acaibi ereunud'
	},
      
	{
		nummer: 'NR-10',
		naam: 'uvuiki umereiki'
	},
      
	{
		nummer: 'NR-11',
		naam: 'urana omoanom'
	},
      
	{
		nummer: 'NR-12',
		naam: 'azauvu uropoomo'
	},
      
	{
		nummer: 'NR-13',
		naam: 'ibiozo ixiabaol'
	},
      
	{
		nummer: 'NR-14',
		naam: 'udil ugazaur'
	},
      
	{
		nummer: 'NR-15',
		naam: 'opoem ugomol'
	},
      
	{
		nummer: 'NR-16',
		naam: 'usuem ugazaom'
	},
      
	{
		nummer: 'NR-17',
		naam: 'ibiixi udiliki'
	},
      
	{
		nummer: 'NR-18',
		naam: 'ereaza opouromo'
	},
      
	{
		nummer: 'NR-19',
		naam: 'anaiki uwuezeur'
	},
      
	{
		nummer: 'NR-20',
		naam: 'uwuiki ibiolaca'
	},
    
	{
		nummer: 'NR-21',
		naam: 'omusu ibiereaca'
	},
    
	{
		nummer: 'NR-22',
		naam: 'acaere ibiomol'
	},
    
];

console.log(klas);

//Deel 2
function maakKlas(aantal) {
	let klas = [];
	for (let i = 1; i <= aantal; i++) {
		let naam = lettergrepen[Math.floor(Math.random() * lettergrepen.length)] + ' ' + lettergrepen[Math.floor(Math.random() * lettergrepen.length)];
		let nummer = 'NR-' + (i < 11 ? '0' : '') + i;
		klas.push({nummer: nummer, naam: naam});
	}
	return klas;
}

let klasAvond = maakKlas(11, 'avond');
let klasDag = maakKlas(21, 'dag');

console.log(klasAvond);
console.log(klasDag);
