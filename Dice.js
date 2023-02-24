const Title = document.getElementById("Title");
 

function getRandomNumber() {
    let x = Math.floor((Math.random() * 6) + 1);
    return x;
}

const Dice1_number = getRandomNumber();
const Dice2_number = getRandomNumber();

function winner(){
    if(Dice1_number > Dice2_number){
        Title.innerText = "Player 1 Wins!";
    }else if(Dice1_number < Dice2_number){
        Title.innerText = "Player 2 Wins!";
    }else{
        Title.innerText = "Draw!";
    }
}

winner();

