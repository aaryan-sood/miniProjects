let p1Button=document.querySelector('#p1Button');
let p2Button=document.querySelector('#p2Button');

let p1Display=document.querySelector('#p1Display');
let p2Display=document.querySelector('#p2Display');

let winningPlayTo=document.querySelector('#playto');

let winningScore=5;
let isGameOver=false;

let reset=document.querySelector('#reset');
let p1Score=0,p2Score=0;

zero=function (){
    isGameOver=false;
    p1Score=0;
    p2Score=0;
    p1Display.innerText=p1Score;
    p2Display.innerHTML=p2Score;
    p1Display.classList.remove('winner','loser');
    p2Display.classList.remove('winner','loser');
    p1Button.disabled=false;
    p2Button.disabled=false;
}

winningPlayTo.addEventListener('change',function(){ 
    winningScore=parseInt(this.value);
    zero();
})

p1Button.addEventListener('click',function(){
    if(!isGameOver)
    {
        p1Score+=1;
        if(p1Score === winningScore)
        {       
            isGameOver=true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
            p1Button.disabled=true;
            p2Button.disabled=true;
        }
        p1Display.innerText=p1Score;
    }
})

p2Button.addEventListener('click',function(){
    if(!isGameOver)
    {
        p2Score+=1;
        if(p2Score === winningScore)
        {       
            isGameOver=true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
            p1Button.disabled=true;
            p2Button.disabled=true;
        }
        p2Display.innerText=p2Score;
    }
})

reset.addEventListener('click',zero);

