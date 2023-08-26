
//function to organise the game and give score for the round
let playerScore =0;
let computerScore =0;
let playerSelect;
let computerSelect;


function playRound(playerSelect, computerSelect)
{   
        
        
        //playerSelect=prompt("Choose your weapon sir!!");
        //playerSelect =playerSelect.toUpperCase();
        computerSelect=getcomputerChoice();
        if(playerSelect=="ROCK"&&computerSelect=="SCISSOR" || playerSelect=="SCISSOR"&&computerSelect=="PAPER" || playerSelect=="PAPER"&&computerSelect=="ROCK")
        {
        textOne.textContent="You win!! " +playerSelect+ " beats " +computerSelect;
        playerScore++
        textTwo.textContent="Player score at the moment is " +playerScore;
        }
        else if(computerSelect=="ROCK" &&playerSelect=="SCISSOR" || computerSelect=="PAPER" && playerSelect=="ROCK" || computerSelect=="SCISSOR" &&playerSelect=="PAPER" )
        {
        textOne.textContent="You lose!! " +computerSelect+ " beats " +playerSelect;
        computerScore++
        textTwo.textContent="Computer score at the moment is " +computerScore;    
        }
        else if(playerSelect==computerSelect)
        {
        textOne.textContent="It's a draw man!!";
        textTwo.textContent="player score at the moment is "+playerScore+ " computer score at the moment is " +computerScore
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
    if(playerScore==5 &&computerScore<5)
        {
            endResult.textContent="Final scores: Player Score : " +playerScore+ " Computer Score : " +computerScore;
            finalOutcome.textContent="You win! reload to play again!!";
            btn1.setAttribute("disabled", "disabled");
            btn2.setAttribute("disabled", "disabled");
            btn3.setAttribute("disabled", "disabled");
            
        
        }
        else if (playerScore<5 &&computerScore==5){
            endResult.textContent="Final scores: Player Score : " +playerScore+ " Computer Score : " +computerScore;
            finalOutcome.textContent="You lose! reload to play again!!";
            btn1.setAttribute("disabled", "disabled");
            btn2.setAttribute("disabled", "disabled");
            btn3.setAttribute("disabled", "disabled");
            
        
        }
}
//-------------------------------------
//Event listener for player choice
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const textOne = document.querySelector(".textOne");
const textTwo = document.querySelector(".textTwo");
const endResult = document.querySelector(".endResult")
const finalOutcome = document.querySelector(".finalOutcome")



btn1.addEventListener("click",function(e)
{
    
     playerSelect="ROCK";
     computerSelect=getcomputerChoice();
    playRound(playerSelect, computerSelect);
     game(); 
    
    
})
btn2.addEventListener("click",function(e)
{
     playerSelect="PAPER";
     computerSelect=getcomputerChoice();
    playRound(playerSelect, computerSelect);
    game(); 
})
btn3.addEventListener("click",function(e)
{
     playerSelect="SCISSOR";
     computerSelect=getcomputerChoice();
    playRound(playerSelect, computerSelect);
    game();
    
})

