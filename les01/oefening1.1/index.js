const nu = new Date();
const uur = nu.getHours();

if (uur > 5 && uur < 11) 
{ console.log('goedemorgen'); }

else if (uur > 0 && uur < 5) 
{ console.log('goedenacht'); }

else if (uur > 11 && uur < 13) 
{ console.log('goedemiddag'); }

else if (uur > 13 && uur < 16)
{ console.log('goedenamiddag'); }

else { console.log('goede avond'); }