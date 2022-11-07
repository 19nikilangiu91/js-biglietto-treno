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


// Se il cliente è minorenne verrà applicato lo sconto del 20%


// Se il cliente è adulto pagherà il prezzo pieno


// Se il cliente è anziano verrà applicato lo sconto del 40%

// Output

