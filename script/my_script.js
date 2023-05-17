
let diceWinner = document.getElementById("dice-winner")

let rollDice = document.getElementById('dice-button')

rollDice.addEventListener('click', function () {
    // Add first dice
    let firstDice = Math.floor((Math.random() * 6) + 1);
    // let playerOneResult = document.getElementById('p-one-result');
    // playerOneResult.innerHTML = firstDice;

    // Add second dice
    let secondDice = Math.floor((Math.random() * 6) + 1);
    // let playerTwoResult = document.getElementById('p-two-result');
    // playerTwoResult.innerHTML = secondDice;

    // Determine the winner
    if (firstDice > secondDice) {
        console.log("Player 1 wins!")
        diceWinner.innerText = " Player 1 wins!"
    } else if (firstDice < secondDice) {
        console.log("Player 2 wins!")
        diceWinner.innerText = " Player 2 wins!"
    } else {
        console.log("Draw!")
        diceWinner.innerText = " It's a Draw."
    }


    // first dice 
    let firstDiceImgFirst = document.getElementById('f-dice-img-one');
    let secondDiceImgFirst = document.getElementById('f-dice-img-two');
    let tirdDiceImgFirst = document.getElementById('f-dice-img-three');
    let fourthDiceImgFirst = document.getElementById('f-dice-img-four');
    let fifthDiceImgFirst = document.getElementById('f-dice-img-five');
    let sixthDiceImgFirst = document.getElementById('f-dice-img-six');

    // Add first dice img 
    if (firstDice === 1) {
        // Hyde previous dice
        secondDiceImgFirst.classList.add("d-none")
        tirdDiceImgFirst.classList.add("d-none")
        fourthDiceImgFirst.classList.add("d-none")
        fifthDiceImgFirst.classList.add("d-none")
        sixthDiceImgFirst.classList.add("d-none")
        // show new dice 
        firstDiceImgFirst.classList.remove("d-none")
    } else if (firstDice === 2) {
        // Hyde previous dice
        firstDiceImgFirst.classList.add("d-none")
        tirdDiceImgFirst.classList.add("d-none")
        fourthDiceImgFirst.classList.add("d-none")
        fifthDiceImgFirst.classList.add("d-none")
        sixthDiceImgFirst.classList.add("d-none")
        // show new dice 
        secondDiceImgFirst.classList.remove("d-none")
    } else if (firstDice === 3) {
        // Hyde previous dice
        firstDiceImgFirst.classList.add("d-none")
        secondDiceImgFirst.classList.add("d-none")
        fourthDiceImgFirst.classList.add("d-none")
        fifthDiceImgFirst.classList.add("d-none")
        sixthDiceImgFirst.classList.add("d-none")
        // show new dice 
        tirdDiceImgFirst.classList.remove("d-none")
    } else if (firstDice === 4) {
        // Hyde previous dice
        firstDiceImgFirst.classList.add("d-none")
        secondDiceImgFirst.classList.add("d-none")
        tirdDiceImgFirst.classList.add("d-none")
        fifthDiceImgFirst.classList.add("d-none")
        sixthDiceImgFirst.classList.add("d-none")
        // show new dice 
        fourthDiceImgFirst.classList.remove("d-none")
    } else if (firstDice === 5) {
        // Hyde previous dice
        firstDiceImgFirst.classList.add("d-none")
        secondDiceImgFirst.classList.add("d-none")
        tirdDiceImgFirst.classList.add("d-none")
        fourthDiceImgFirst.classList.add("d-none")
        sixthDiceImgFirst.classList.add("d-none")
        // show new dice 
        fifthDiceImgFirst.classList.remove("d-none")
    } else if (firstDice === 6) {
        // Hyde previous dice
        firstDiceImgFirst.classList.add("d-none")
        secondDiceImgFirst.classList.add("d-none")
        tirdDiceImgFirst.classList.add("d-none")
        fourthDiceImgFirst.classList.add("d-none")
        fifthDiceImgFirst.classList.add("d-none")
        // show new dice 
        sixthDiceImgFirst.classList.remove("d-none")
    }

    // second dice 
    let firstDiceImgSecond = document.getElementById('s-dice-img-one');
    let secondDiceImgSecond = document.getElementById('s-dice-img-two');
    let tirdDiceImgSecond = document.getElementById('s-dice-img-three');
    let fourthDiceImgSecond = document.getElementById('s-dice-img-four');
    let fifthDiceImgSecond = document.getElementById('s-dice-img-five');
    let sixthDiceImgSecond = document.getElementById('s-dice-img-six');

    // Add second dice img 
    if (secondDice === 1) {
        // Hyde previous dice
        secondDiceImgSecond.classList.add("d-none")
        tirdDiceImgSecond.classList.add("d-none")
        fourthDiceImgSecond.classList.add("d-none")
        fifthDiceImgSecond.classList.add("d-none")
        sixthDiceImgSecond.classList.add("d-none")
        // show new dice 
        firstDiceImgSecond.classList.remove("d-none")
    } else if (secondDice === 2) {
        // Hyde previous dice
        firstDiceImgSecond.classList.add("d-none")
        tirdDiceImgSecond.classList.add("d-none")
        fourthDiceImgSecond.classList.add("d-none")
        fifthDiceImgSecond.classList.add("d-none")
        sixthDiceImgSecond.classList.add("d-none")
        // show new dice 
        secondDiceImgSecond.classList.remove("d-none")
    } else if (secondDice === 3) {
        // Hyde previous dice
        firstDiceImgSecond.classList.add("d-none")
        secondDiceImgSecond.classList.add("d-none")
        fourthDiceImgSecond.classList.add("d-none")
        fifthDiceImgSecond.classList.add("d-none")
        sixthDiceImgSecond.classList.add("d-none")
        // show new dice 
        tirdDiceImgSecond.classList.remove("d-none")
    } else if (secondDice === 4) {
        // Hyde previous dice
        firstDiceImgSecond.classList.add("d-none")
        secondDiceImgSecond.classList.add("d-none")
        tirdDiceImgSecond.classList.add("d-none")
        fifthDiceImgSecond.classList.add("d-none")
        sixthDiceImgSecond.classList.add("d-none")
        // show new dice 
        fourthDiceImgSecond.classList.remove("d-none")
    } else if (secondDice === 5) {
        // Hyde previous dice
        firstDiceImgSecond.classList.add("d-none")
        secondDiceImgSecond.classList.add("d-none")
        tirdDiceImgSecond.classList.add("d-none")
        fourthDiceImgSecond.classList.add("d-none")
        sixthDiceImgSecond.classList.add("d-none")
        // show new dice 
        fifthDiceImgSecond.classList.remove("d-none")
    } else if (secondDice === 6) {
        // Hyde previous dice
        firstDiceImgSecond.classList.add("d-none")
        secondDiceImgSecond.classList.add("d-none")
        tirdDiceImgSecond.classList.add("d-none")
        fourthDiceImgSecond.classList.add("d-none")
        fifthDiceImgSecond.classList.add("d-none")
        // show new dice 
        sixthDiceImgSecond.classList.remove("d-none")
    }


}
)


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

