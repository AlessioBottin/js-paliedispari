// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo all' utente pari o dispari 
const userChoice = prompt('digita pari o dispari');
console.log(userChoice);

// Chiedo un numero all' utente
const userNumber = parseInt( prompt('dimmi un numero da 1 a 5') );
console.log(userNumber);

// Genero un numero per il pc 
const pcNumber = getRndInteger(1, 5);
console.log(pcNumber);
  
// Sommo, verifico e stampo il messaggio 
if ( oddOrEven(userNumber, pcNumber) === userChoice ) {
    alert('Hai vinto');
} else {
    alert('Hai perso');
}


// FUNCTIONS
// - Somma due numeri e verifica se la somma è pari o dispari
// num1, num2 --> due qualsiasi numeri  
function oddOrEven(num1, num2) {
    let sum = num1 + num2;
    let result;

    if ( sum % 2 === 0 ) {
        result = 'pari';
    } else {
        result = 'dispari';
    }
    
    return result;
}

// - Genera un numero casuale da min a max inclusi 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
