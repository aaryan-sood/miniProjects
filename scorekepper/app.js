const p1={
    score:0,
    button:document.querySelector('#p1Button'),
    display:document.querySelector('#p1Display')
}

const p2={
    score:0,
    button:document.querySelector('#p2Button'),
    display:document.querySelector('#p2Display')
}




let winningPlayTo=document.querySelector('#playto');

let winningScore=5;
let isGameOver=false;

let reset=document.querySelector('#reset');

zero=function (){
    isGameOver=false;
    p1.score=0;
    p2.score=0;
    p1.display.innerText=p1.score;
    p2Display.innerHTML=p2.score;
    p1.display.classList.remove('winner','loser');
    p2.display.classList.remove('winner','loser');
    p1.button.disabled=false;
    p2.button.disabled=false;
}

winningPlayTo.addEventListener('change',function(){ 
    winningScore=parseInt(this.value);
    zero();
})

function updateScore(player,opponet){
    if(!isGameOver)
        {
            player.score+=1;
            if(player.score === winningScore)
                {
                    isGameOver=true;
                    player.display.classList.add('winner');
                    opponet.display.classList.add('loser');
                    player.button.disabled=true;
                    opponet.button.disabled=true;
                }
            player.display.innerText=player.score;
        }
}
p1.button.addEventListener('click',function(){
    updateScore(p1,p2);
})

p2.button.addEventListener('click',function(){
    updateScore(p2,p1);
})

reset.addEventListener('click',zero);

