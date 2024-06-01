let p1Button=document.querySelector('#p1Button');
let p2Button=document.querySelector('#p2Button');

let p1Display=document.querySelector('#p1Display');
let p2Display=document.querySelector('#p2Display');

let winningScore=5;

let p1Score=0,p2Score=0;
p1Button.addEventListener('click',function(){
    if(p1Score !== winningScore)
    {
        p1Score+=1;
        p1Display.innerText=p1Score;
    }
})

p2Button.addEventListener('click',function(){
    if(p2Score !== winningScore)
    {
        p2Score+=1;
        p2Display.innerText=p2Score;
    }
})