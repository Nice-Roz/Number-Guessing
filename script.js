'use strict';
document.querySelector('.guess').value=16;

let secretNumer = Math.trunc(Math.random()*20+1);
let score =20;
document.querySelector(".score").textContent=score;
let highScore = 0;

document.querySelector(".check").addEventListener("click",function(){
    const guessNumber =Number(document.querySelector('.guess').value);
    console.log(guessNumber);

    if(!guessNumber){
        displayMessage("No Number!");
    }else if(secretNumer===guessNumber){
      displayMessage("Correct🙌");
      document.querySelector('.number').textContent = secretNumer;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width='30rem';
          if(score>highScore){
            highScore= score;
            document.querySelector('.highscore').textContent = highScore;
          }
    }else if(secretNumer!==guessNumber){
        if(score>1){
            displayMessage( secretNumer>guessNumber?'Low':'High')
            score--;
            document.querySelector(".score").textContent=score;
        }else{
            displayMessage('You lost')
            score=0;
            document.querySelector(".score").textContent=score;
           
        }
    }
});
    //  
    // }else if(secretNumer<guessNumber){
        // if(score>1){
            // document.querySelector(".message").textContent="Heigh";
            // score--;
            // document.querySelector(".score").textContent=score;
        // }else{
            // document.querySelector(".message").textContent="You lost";
            // score=0;
            // document.querySelector(".score").textContent=score;
        //    
        // }
    // }


document.querySelector('.again').addEventListener('click', function(){
    score=20;
    document.querySelector(".score").textContent=score;
    secretNumer = Math.trunc(Math.random()*20+1);
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent='?';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.guess').value='';
})

function displayMessage(message){
    document.querySelector('.message').textContent=message;
}