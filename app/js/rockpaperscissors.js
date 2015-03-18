////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////


function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var player = move || getInput();



    return player;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

    var cpu = move || randomPlay();

    return cpu;
}

function getWinner(playerMove,computerMove) {
    var winner = 'player';
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    if(playerMove == computerMove){
            winner = 'tie';
    }

    else if(playerMove == 'rock' && computerMove =='scissors'){
        
         
    }

    else if(playerMove == 'paper' && computerMove == 'rock'){
    
    }

    else if(playerMove == 'scissors' && computerMove == 'paper'){
   
    }

    else{
        winner = 'computer';
    }
    console.log();
    console.log("====================================");
    console.log(playerMove + " VS " + computerMove);
    console.log("====================================");
    console.log();
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var tied = 0;
    var gamesToWin = 5;
    var whoWon;
    

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

     while((playerWins < gamesToWin) && (computerWins < gamesToWin)){
        
        whoWon = getWinner(getPlayerMove(),getComputerMove());
        
        
     //log to console round winner and current win   
        if(whoWon =='player'){
        playerWins +=1; 
        console.log("Winner: " + whoWon+ "(" +playerWins +")");
    }
        else if(whoWon == 'computer'){
        computerWins +=1;
        console.log("Winner: " + whoWon + "("+computerWins+")");
    }
    else{
    
        tied += 1;
            console.log(whoWon);
    }

     }


    return [playerWins, computerWins];
}
