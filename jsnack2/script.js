/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//richieste all'utente

const sceltaUtente = prompt('Pari o dispari?');
let sceltaNumeroUtente = "";

if (sceltaUtente === "Pari" || "pari" || sceltaUtente === "Dispari" || "dispari"){
  
  sceltaNumeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
  
  if(sceltaNumeroUtente < 1 || sceltaNumeroUtente > 5){

    alert('Puoi inserire solo un numero compreso tra 1 e 5!')
  }

}

console.log(sceltaNumeroUtente);
