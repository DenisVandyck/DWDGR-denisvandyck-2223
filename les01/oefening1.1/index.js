const vandaag = new Date();
const uur = vandaag.getHours();
if (uur > 0 && uur < 5) { console.log('goede nacht'); }
else if (uur > 5 && uur < 12) { console.log('goede morgen'); }
else if (uur > 12 && uur < 17) { console.log('goede middag'); }
else { console.log('goede avond'); }