const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const btStart = document.querySelector("#start");
const game = document.querySelector(".game");

//const btSumir = document.querySelector("#sumir");
//const btBotar = document.querySelector("#botar");
let cliques = 0;
let pontos = 0;

function sorteiaBuraco(){
    return Math.floor(Math.random() * 7);
}

function apareceMarmota(numeroBuraco){
    const buraco = holes[numeroBuraco];
    buraco.classList.add("up");
}

function someMarmota(numeroBuraco){
    const buraco = holes[numeroBuraco];
    buraco.classList.remove("up");
}
/*
btBotar.onclick = function(){
    const numero = sorteiaBuraco();
    apareceMarmota(numero);
}

btSumir.onclick = function(){
    const numero = sorteiaBuraco();
    someMarmota(numero);
}
*/
function scorePlacar(){
    document.querySelector(".up .mole").addEventListener("click" , (evento) => {
        cliques += 1;
        if(cliques == 1){
            pontos +=1;
            scoreBoard.textContent = pontos;
        }
    })
       cliques = 0;
}

function startGame(){
    scoreBoard.innerHTML = "0";
    btStart.removeEventListener("click", startGame);
    btStart.disable = true;

    
    const intervalo = setInterval(() => {
        const numeroBuraco = sorteiaBuraco();
        apareceMarmota(numeroBuraco);
        scorePlacar();
        setTimeout(() => {
            someMarmota(numeroBuraco);
        }, 800);
    }, 700);

    setTimeout(() => {
        clearInterval(intervalo);
        game.removeEventListener("click", scorePlacar);
        btStart.addEventListener("click", startGame);
        btStart.disable = false;
    }, 20000);

    
}

btStart.addEventListener("click", startGame);


