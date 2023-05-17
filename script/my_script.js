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

// Add email List 
let emailList = ['pippo@gmail.com', 'paperino@gmail.com', 'topolina@libero.it', 'olivia@gmail.com', 'orazio@gmail.com', 'clarabella@gmail.com', 'tip@libero.it', 'tap@libero.it', 'etabeta@gmail.com', 'topolino@gmail.com', 'pluto@gmail.com', 'pietro@gmail.com', 'amelia@gmail.com', 'archimede@gmail.com', 'battista@libero.com', 'paperina@gmail.com', 'brigitta@gmail.com', 'ziopaperone@gmail.com', 'ciccio@gimail.com', 'qui@libero.com', 'quo@gmail.com', 'qua@gmail.com'];
console.log(emailList);

// Know the number of emails in the list 
let emailQuantity = emailList.length;
// console.log(emailQuantity);

// Add event listener
let emailButton = document.getElementById("email-button");
let yourEmail;

// Add Email verify text elements 
let emailVerifyTxt = document.getElementById("mail-checker")
let emailVerifyElement = document.createElement("p");
// Add button click behavior 
emailButton.addEventListener('click', function () {
    // Add input value 
    yourEmail = document.getElementById("email-input");
    yourEmail = yourEmail.value;
    console.log(yourEmail);
    let verify = 0;

    emailVerifyTxt.append(emailVerifyElement);

    // Add for cycle 
    for (let i = 0; i < emailQuantity; i++) {
        // Add access verification
        if (yourEmail === emailList[i]) {
            console.log("You got access!");
            emailVerifyElement.innerHTML = 'You got access';
            emailVerifyElement.classList.add("fw-bold")
            emailVerifyElement.classList.add("my_txt-green")
            verify = 1;
        }
    }

    if (verify === 0) {
        console.log("Sorry, you can't access");
        emailVerifyElement.innerHTML = "Sorry, you can't access";
        emailVerifyElement.classList.add("fw-bold")
        emailVerifyElement.classList.add("my_txt-red")
    }
})

