let gameseq=[];
let userseq=[];
let btns = ["b1", "b2" ,"b3" ,"b4"];

started = false;
level = 0 ;
let h3 = document.querySelector("h3")

document.addEventListener("keypress", function(){
  if (started == false){
    console.log("Game started");
    started = true ;
    levelUp();
}
});

function btnFlash(btn){
  btn.classList.add("Flash");
  setTimeout( function (){
    btn.classList.remove("Flash");
  }, 100);
}

function levelUp() {
  userseq=[];
    level++ ;
  h3.innerText = `Level ${level}`;
let randidx = Math.floor(Math.random()*3);
let randColor =btns[randidx];
let randBtn =document.querySelector(`.${randColor}`);
 gameseq.push(randColor);
 console.log(gameseq);
  btnFlash(randBtn);
}
function checkAns(){
  let idx =level-1 ;
  if(userseq[idx] == gameseq[idx]){
    if(userseq.length == gameseq.length){
      setTimeout(levelUp ,1000);
    }
    console.log("Same Value");
  }
  else{
    h3.innerHTML = `game over! Your score was <b>${level}</b> <br> press any key to start :`;
    document.querySelector("body").style.backgroundColor ="red" ;
    settimeout(function () {
      document.querySelector("body").style.backgroundColor ="white" ;
    },150)
    reset();
  }
}

function btnPress(){
  let btn = this ;
  btnFlash(btn);
  userColor= btn.getAttribute("id");
  userseq.push(userColor);
  checkAns(userseq.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
  btn.addEventListener("click", btnPress);
}


function reset (){
  started == false ;
  gameseq = [] ;
  userseq = [];
  level = 0 ;
}