//               -------------ESERCIO PALINDROMA------------

//               ------- v1.0 senza funzione
/*

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.*/

//Chiedo una parola all'utente

/*
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


*/



      //------------------- v1.1  ESERCIZIO CON FUNZIONE --------------

const parolaUtente = prompt('Inserisci una parola');
let verifica = verificaPalindromo(parolaUtente);

//creazione funzione

function verificaPalindromo (stringa){
  let parolaDivisa = stringa.split("");
  console.log(parolaDivisa);  
  parolaDivisa = parolaDivisa.reverse();
  console.log(parolaDivisa);
  const parolaAlContrario = parolaDivisa.join('');
  return(parolaAlContrario);
}

console.log(verifica);

//verifica delle parole

if(parolaUtente === verifica){
  console.log(`La parola ${parolaUtente} è un palindromo`);
}else{
  console.log(`La parola ${parolaUtente} non è un palindromo`);
}