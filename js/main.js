/*----- constants -----*/
const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');

/*----- app's state (variables) -----*/
let scores, results;

/*----- cached element references -----*/



/*----- functions -----*/
const playRound = () => {
    console.log("hit")
}

const render = () => {
    
}
const init = () => {
    score = {
        p:0,
        t:0,
        c:0
    };
    results = {
        p: "r",
        c: "r"
    };
    winner = null;
    render();
}

init();

/*----- event listeners -----*/
document.querySelector("main button")
addEventListener("click", playRound)