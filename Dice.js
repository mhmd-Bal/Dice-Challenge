const Title = document.getElementById("Title");
const Dice = document.createElement("img");
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

function assignImage(Dice_number) {
    switch (Dice_number){
        case 1:
            Dice.src = URL("Images/1.png");
            break;
        case 2:
            Dice.src = "Image/2.png";
            break;
        case 3:
            Dice.src = "Image/3.png";
            break;
        case 4:
            Dice.src = "Image/4.png";
            break;
        case 5:
            Dice.src = "Image/5.png";
            break;
        case 6:
            Dice.src = "Image/6.png";
            break;
    }
    Player1.appendChild(Dice);
}

function assignToPlayer(player) {
    player.appendChild(Dice);
}

function start(){
    winner();
    assignImage(Dice1_number);
    assignToPlayer(Player1);
    assignImage(Dice2_number);
    assignToPlayer(Player2);
}


start();