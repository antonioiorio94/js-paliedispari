/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//richieste all'utente

let sceltaUtente = prompt('Pari o dispari?').toLowerCase();
let sceltaNumeroUtente = "";

if(sceltaUtente === "pari" || sceltaUtente === "dispari"){
  
  sceltaNumeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
  
  if(sceltaNumeroUtente < 1 || sceltaNumeroUtente > 5){

    alert('Puoi inserire solo un numero compreso tra 1 e 5!');
    sceltaNumeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
  }

}else {
  alert("scegli tra pari o dispari");
  
}

console.log(sceltaNumeroUtente);
console.log(sceltaUtente);

//generare un numero random


function numeroRandom (){
  let sceltaComputer = parseInt(Math.floor(Math.random()* 5 + 1));
  return sceltaComputer;
}

 const numeroComputer = numeroRandom();
console.log(numeroComputer);

//somma delle scelte

const somma = (sceltaNumeroUtente + numeroComputer);


//funzione per stabilire se la somma è pari o dispari

let validatore = pariODIspari(somma);

function pariODIspari (numero){
  let risultato = "";
  if (numero % 2 === 0){
    risultato = "pari";
  }else{
    risultato = "dispari"
  };
  return risultato;
};

console.log(`La somma dei numeri scelti è ${somma}, quindi è ${validatore}!`);
console.log(validatore)