
const prezzoKm = 0.21

console.log(prezzoKm)


// Quanti chilometri vuole percorrere l'utente?

let utenteKm = parseInt(prompt("Quanti chilometri vuole percorrere?"))

console.log(utenteKm)

// Quanti anni ha l'utente?

let utenteEta = parseInt(prompt("Qual'è la sua età?"))

console.log(utenteEta)

let sconto = 0;

if (utenteEta < 18){
    sconto = 20;
} else if (utenteEta >= 65){
    sconto = 40;
}

console.log(sconto)

// Calcolare il prezzo totale del biglietto

const prezzoTotale = prezzoKm * utenteKm;

console.log(prezzoTotale)

// Calcolare il prezzo scontanto del biglietto

const prezzoScontato = prezzoTotale * (100 - sconto) / 100;

console.log(prezzoScontato)

// Output

document.getElementById("title").innerHTML= `Con l'acquisto di questo biglietto,
potrà percorrere ${utenteKm}Km e avendo ${utenteEta} anni, avrà il diritto di uno
sconto del ${sconto}%, il suo prezzo sarà di ${prezzoTotale}€ e il suo prezzo scontato totale sarà di ${prezzoScontato}€.`



