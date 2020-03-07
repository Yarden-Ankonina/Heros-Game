let start = document.getElementById("start");
let options = document.getElementById("options");
let back = document.getElementById("return");
let playAgain = document.getElementById("playAgain");
let game = document.querySelector(".game");

back.style.display= "none";
game.style.display = "none";
playAgain.style.display = "none";


start.addEventListener('click',function(){
    document.querySelector(".menu h1").style.display = "none";
    document.querySelector(".menu h2").style.display = "none";
    document.querySelector(".menu").style.display = "none";
    back.style.display = "inherit";
    game.style.display = "inherit";
    playAgain.style.display = "inherit";
    document.querySelector(".gameContainer").style.width = "100%";
    startGame();
});

back.addEventListener('click', function(){
    document.querySelector("h1").style.display = "block";
    document.querySelector("h2").style.display = "block";
    document.querySelector(".menu").style.display = "block";
    back.style.display= "none";
    game.style.display = "none";
    playAgain.style.display = "none";
    document.querySelector(".gameContainer").style.width = "0";
    
});

options.addEventListener('click',function(){
    console.log("connected");
});