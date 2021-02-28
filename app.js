var userScore = 0, compScore = 0;

// why does it work without adding const/let/var before
// the variable names?
const rock = document.querySelector('#rock > img');
const paper = document.querySelector('#paper > img');
const scissors = document.querySelector('#scissors > img');

function play() {
    const message = document.getElementById('message');
    let compMove = Math.floor(Math.random() * 3);
    console.log(compMove);
    // 0 = rock, 1 = paper, 2 = scissors

    switch(this) {
        case rock:
            if (compMove == 0) { 
                message.innerHTML = "Tie";
            } else if (compMove == 1) { 
                compScore++;
                message.innerHTML = "You lose";
            } else {
                userScore++; 
                message.innerHTML = "You win";
            }
            break;
        case paper:
            if (compMove == 0) {
                userScore++; 
                message.innerHTML = "You win";
            } else if (compMove == 1) {
                message.innerHTML = "Tie";
            } else {
                compScore++;
                message.innerHTML = "You lose";
            }
            break;
        case scissors:
            if (compMove == 0) { 
                compScore++; 
                message.innerHTML = "You lose";
            } else if (compMove == 1) { 
                userScore++;
                message.innerHTML = "You win";
            } else {
                message.innerHTML = "Tie";
            }
    }

    document.getElementById('p-score').innerHTML = userScore;
    document.getElementById('c-score').innerHTML = compScore;

}

function main() {
    rock.addEventListener('click', play);
    paper.addEventListener('click', play);
    scissors.addEventListener('click', play);
}

main();
