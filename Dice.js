const Title = document.getElementById("Title");
const Dice1 = document.createElement("img");
const Dice2 = document.createElement("img");
const Player1 = document.getElementById("Player1");
const Player2 = document.getElementById("Player2");

function getRandomNumber() {
    let x = Math.floor((Math.random() * 6) + 1);
    return x;
}

const Dice1_number = getRandomNumber();
const Dice2_number = getRandomNumber();

function winner() {
    if(Dice1_number > Dice2_number){
        Title.innerText = "Player 1 Wins!";
    }else if(Dice1_number < Dice2_number){
        Title.innerText = "Player 2 Wins!";
    }else{
        Title.innerText = "Draw!";
    }
}

function assignDice(Dice, Dice_number, Player) {
    switch (Dice_number){
        case 1:
            Dice.src = "Images/1.png";
            break;
        case 2:
            Dice.src = "Images/2.png";
            break;
        case 3:
            Dice.src = "Images/3.png";
            break;
        case 4:
            Dice.src = "Images/4.png";
            break;
        case 5:
            Dice.src = "Images/5.png";
            break;
        case 6:
            Dice.src = "Images/6.png";
            break;
    }
    Dice.style.width = "100px";
    Player.appendChild(Dice);
}



function start(){
    winner();
    assignDice(Dice1, Dice1_number, Player1);
    assignDice(Dice2, Dice2_number, Player2);
}


start();