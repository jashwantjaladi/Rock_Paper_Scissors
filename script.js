
//function to organise the game and keep the score
function playRound(playerSelect, computerSelect)
{   
        let playerScore =0;
        
        playerSelect=prompt("Choose your weapon sir!!");
        playerSelect =playerSelect.toUpperCase();
        computerSelect=getcomputerChoice();
        if(playerSelect=="ROCK"&&computerSelect=="SCISSOR")
        {
        return console.log("You win!! Rock beats Scissor")
        }else if(playerSelect=="SCISSOR"&&computerSelect=="PAPER")
        {
        return console.log("You win!! Scissor beats Paper")
        }else if(playerSelect=="PAPER"&&computerSelect=="ROCK")
        {
        return console.log("You win!! Paper beats Rock")
        }

        if(computerSelect=="ROCK" &&playerSelect=="SCISSOR")
        {
        return console.log("You lose!! rock beats scissor")    
        }else if(computerSelect=="PAPER" && playerSelect=="ROCK")
        {
            return console.log("You lose!! paper beats Rock")
        }else if(computerSelect=="SCISSOR" &&playerSelect=="PAPER")
        {
            return console.log("You lose!! scissor beats paper")
        }
        if(playerSelect==computerSelect)
        {
            return console.log("It's a draw man!!")
        }
}

// function to get computers choice
function getcomputerChoice()
{
    let array = ["Rock", "Paper", "Scissor"];
    let choice= array[Math.floor(Math.random()*array.length)] ;
    return choice.toUpperCase();

}
    
//function to play rounds
function game()
{
    let count = prompt("How many rounds do you wanna play??")
    for (let i=1;i<=count;i++)
    {
        playRound();
    }
}
game();

