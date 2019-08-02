/*----- constants -----*/
const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');

/*----- app's state (variables) -----*/
let scores, results, winner;

/*----- cached element references -----*/
const scoreEls = {
    p: document.getElementById("p-score"),
    t: document.getElementById("t-score"),
    c: document.getElementById("c-score")
};

const resultEls = {
    p: {
        borderEl: document.getElementById("p-result"),
        imgEl: document.querySelector("#p-result img")
    },
    c: {
        borderEl: document.getElementById("c-result"),
        imgEl: document.querySelector("#c-result img")
    },
}

/*----- functions -----*/
const playRound = () => {
    
}

const init = () => {
    scores = {
        p: 0,
        t: 0,
        c: 0
    };
    results = {
        p: "r",
        c: "r"
    };
    winner = null;
    render();
}

const render = () => {
    for (let score in scores) {
        scoreEls[score].textContent = scores[score]
    }
}
init();

/*----- event listeners -----*/
document.querySelector("main button")
addEventListener("click", playRound)