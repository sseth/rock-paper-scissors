var userScore = 0, compScore = 0;

// why does it work without adding const/let/var before
// the variable names?
const rock = document.querySelector('#rock > img');
const paper = document.querySelector('#paper > img');
const scissors = document.querySelector('#scissors > img');
const message = document.getElementById('message');
const uscoreElem = document.getElementById('u-score');
const cscoreElem = document.getElementById('c-score');

function getCompMove() {
    let rand = Math.floor(Math.random() * 3);
    return ['Rock', 'Paper', 'Scissors'][rand];
}

function win(c) {
    userScore++;
    uscoreElem.innerHTML = userScore;
    message.innerHTML = c + ": You win";
}

function lose(c) {
    compScore++;
    cscoreElem.innerHTML = compScore;
    message.innerHTML = c + ": You lose";
}

function draw(c) {
    message.innerHTML = c + ": It's a draw";
}

function play() {
    let compMove = getCompMove();

    switch(this.title + compMove) {
        case 'RockScissors':
        case 'ScissorsPaper':
        case 'PaperRock':
            win(compMove);
            break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            draw(compMove);
            break;
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            lose(compMove);
    }

}

function main() {
    rock.addEventListener('click', play);
    paper.addEventListener('click', play);
    scissors.addEventListener('click', play);
}

main();
