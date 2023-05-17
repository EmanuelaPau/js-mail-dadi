
// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
// Tenete presente che non è permesso utilizzare funzioni built-in degli array come Array.includes() e Array.indexOf(), pena l'annullamento dell'esercizio.

// -- DADI--
// 1.creo una variabile il cui valore e' un numero random da 1 a 6 
// 2. creo una seconda variabile il cui valore e' un numero random da 1 a 6 
// 3. stabilisco il vincitore:
// se il primo numero e' > del secondo vince il primo giocatore
// se il primo numero e' < del secondo vince il secondo giocatore
// se i numeri sono lo stesso > il risultato e' pari


// Add first dice
let firstDice = Math.floor((Math.random() * 6) + 1);
console.log(firstDice);

// Add second dice
let secondDice = Math.floor((Math.random() * 6) + 1);
console.log(secondDice);

// Determine the winner
if (firstDice > secondDice) {
    console.log("Player 1 wins!")
} else if (firstDice < secondDice) {
    console.log("Player 2 wins!")
} else {
    console.log("Draw!")
}

// -- MAIL -- 
// 1. creo una lista di email a cui l'utente puo' accedere (array)
// 2. creo un prompt per chiedere all'utente la sua email
// 3. creo un ciclo for in cui:
// definisco la lunghezza del ciclo in base al numero degli elementi dell'array 
// prendo l' elemento del mio Array corrispondente al numero del ciclo e controllo che il suo valore sia uguale al valore del prompt
// continuo fino alla fine degli elementi dell'array
// 4. stabilisco se la mia email corrisponde o no

// Add email List 
let emailList = ['pippo@gmail.com', 'paperino@gmail.com', 'topolina@libero.it', 'olivia@gmail.com', 'orazio@gmail.com', 'clarabella@gmail.com', 'tip@libero.it', 'tap@libero.it', 'etabeta@gmail.com', 'topolino@gmail.com', 'pluto@gmail.com', 'pietro@gmail.com', 'amelia@gmail.com', 'archimede@gmail.com', 'battista@libero.com', 'paperina@gmail.com', 'brigitta@gmail.com', 'ziopaperone@gmail.com', 'ciccio@gimail.com', 'qui@libero.com', 'quo@gmail.com', 'qua@gmail.com'];
console.log(emailList);

// Know the number of emails in the list 
let emailQuantity = emailList.length;
console.log(emailQuantity);

// Add prompt
let yourEmail = prompt('Inserisci la tua email. Es. ciao@gmail.com');
console.log(yourEmail);

// Add for cycle 
for (let i = 0; i <= emailQuantity; i++) {
    console.log(i)
} 