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
parolaDivisa = parolaDivisa.reverse();
console.log(parolaDivisa);

// unire le singole lettere

const parolaAlContrario = parolaDivisa.join('');
console.log(parolaAlContrario);

//verifica delle parole

if(parolaUtente === parolaAlContrario){
  console.log(`La parola ${parolaUtente} è un palindromo`);
}else{
  console.log(`La parola ${parolaUtente} non è un palindromo`);
}