var wins=0,loses=0,draws=0,total=0;

let player1,player2;
function getNames(){
    player1=prompt("Enter name of player1: ");
    while(player1===null){
        alert("Please enter the name of player1: ");
        player1=prompt("Enter name of player1: ");
    }
    player2=prompt("Enter name of player2: ");
    while(player2===null){
        alert("Please enter the name of player2: ");
        player2=prompt("Enter name of player2: ");
    }
    while(player1===player2){
        alert("Please enter different name for player2: ");
        player2=prompt("Enter name of player2: ");
    }
    player1 = player1[0].toUpperCase()+player1.slice(1).toLowerCase();
    player2 = player2[0].toUpperCase()+player2.slice(1).toLowerCase();
    document.getElementById('tbrow1').innerHTML=`${player1}`;
    document.getElementById('tbrow2').innerHTML=`${player2}`;
    document.getElementsByClassName('player1Name')[0].innerHTML=`${player1}`;
    document.getElementsByClassName('player2Name')[0].innerHTML=`${player2}`;
}
function rollDice(){
    // var wins=document.getElementById('win1').value;
    // var loses=document.getElementById('lose1').value;
    // var draws=document.getElementById('draws1').value;
    var one=Math.round(Math.random()*10)%6+1;
    document.getElementById('dice1').src=diceURL(one);
    var two=Math.round(Math.random()*10)%6+1;
    document.getElementById('dice2').src=diceURL(two);
    if(one===two){
        document.getElementById('result').innerHTML="Draw";
        draws++;
    }
    else if(one>two){
        document.getElementById('result').innerHTML=`${player1} Won the Game`;
        wins++;
    }
    else{
        document.getElementById('result').innerHTML=`${player2} Won the Game`;
        loses++;
    }
    total++;
    document.getElementById('win1').innerHTML=`${wins}`;
    document.getElementById('lose1').innerHTML=`${loses}`;
    document.getElementById('draws1').innerHTML=`${draws}`;
    document.getElementById('win2').innerHTML=`${total-wins-draws}`;
    document.getElementById('lose2').innerHTML=`${total-loses-draws}`;
    document.getElementById('draws2').innerHTML=`${total-wins-loses}`;
}

function diceURL(rand){
    var diceNum;
    switch(rand){
        case 1:
            diceNum="images/dice1.png";
            break;
        case 2:
            diceNum="images/dice2.png";
            break;
        case 3:
            diceNum="images/dice3.png";
            break;
        case 4:
            diceNum="images/dice4.png";
            break;
        case 5:
            diceNum="images/dice5.png";
            break;
        case 6:
            diceNum="images/dice6.png";
            break;
        default: 
            break;
    }
    return diceNum;
}

