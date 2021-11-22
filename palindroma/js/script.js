// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all' utente una parola 
let userWord = prompt('inserisci una parola');

// Verifico che la parola sia palindroma e stampo un messaggio
if( parolaPalindroma(userWord) === userWord.length ) {
    alert('la parola è palindroma');
} else {
    alert('la parola non è palindroma');
}

// FUNCTIONS 
// Verifica se una parola è palindroma o no 
// userWord --> parola che verrà verificata 
function parolaPalindroma (toVerifyWord) {

    let wordCompare = 0;
    const wordToVerifyArray = toVerifyWord.split('');
    const reverseWordArray = [];

    for ( let i = toVerifyWord.length - 1; i >= 0; i-- ) {
        const thisWordLetterToVerify = wordToVerifyArray[i];
        reverseWordArray.push(thisWordLetterToVerify);
    }

    for ( let i = 0; i < toVerifyWord.length; i++) {
        if ( wordToVerifyArray[i] === reverseWordArray[i] ) {
            wordCompare = wordCompare + 1;
        }
    }

    return wordCompare;
}




