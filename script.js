/*
----------------Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.*/

//Chiedo una parola all'utente

const parolaUtente = prompt('Inserisci una parola');

//Scomporre la parola in singole unità e inserirla in un array con il metodo split

let parolaDivisa = parolaUtente.split("");
console.log(parolaDivisa);

// invertire l'array con il metodo reverse
parolaAlContrario = parolaDivisa.reverse();


console.log(parolaAlContrario);
