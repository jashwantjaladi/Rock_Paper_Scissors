
//function to organise the game and give score for the round
let playerScore =0;
let computerScore =0;
function playRound(playerSelect, computerSelect)
{   
        
        
        playerSelect=prompt("Choose your weapon sir!!");
        playerSelect =playerSelect.toUpperCase();
        computerSelect=getcomputerChoice();
        if(playerSelect=="ROCK"&&computerSelect=="SCISSOR" || playerSelect=="SCISSOR"&&computerSelect=="PAPER" || playerSelect=="PAPER"&&computerSelect=="ROCK")
        {
        console.log("You win!! " +playerSelect+ " beats " +computerSelect);
        playerScore++
        return console.log("Player score at the moment is " +playerScore);
        }
        else if(computerSelect=="ROCK" &&playerSelect=="SCISSOR" || computerSelect=="PAPER" && playerSelect=="ROCK" || computerSelect=="SCISSOR" &&playerSelect=="PAPER" )
        {
        console.log("You lose!! " +computerSelect+ " beats " +playerSelect)
        computerScore++
        return console.log("Computer score at the moment is " +computerScore);    
        }
        else if(playerSelect==computerSelect)
        {
        console.log("It's a draw man!!")
        return console.log("player score at the moment is "+playerScore+ " computer score at the moment is " +computerScore)
        }
    
}

// function to get computers choice
function getcomputerChoice()
{
    let array = ["Rock", "Paper", "Scissor"];
    let choice= array[Math.floor(Math.random()*array.length)] ;
    return choice.toUpperCase();

}
    
//function to play rounds and give final score
function game()
{
    let count = prompt("How many rounds do you wanna play??")
    for (let i=1;i<=count;i++)
    {
        playRound();
    }
    if(playerScore>computerScore)
        {
            console.log("Final scores: Player Score : " +playerScore+ " Computer Score : " +computerScore);
            return console.log("you win");
        }
        else{
            console.log("Final scores: Player Score : " +playerScore+ " Computer Score : " +computerScore);
            return console.log("you lose")
        }
}
game();

