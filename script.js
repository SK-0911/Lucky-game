let lucky = Math.floor(Math.random() * 20);

const guess = document.getElementById('guessing');

const check = document.getElementById('check');

const msg = document.getElementById('message');

const main = document.getElementById('main');

const score = document.getElementById('score');

const highScore = document.getElementById('highscore');

const again = document.getElementById('again');


let scoreValue = 10;

let highScoreValue = 0;

score.textContent = scoreValue;

console.log(lucky);

function checkNumber() {
    const num = parseInt(guess.value);

    if (num < 0 || num > 20) {
        msg.textContent = 'Please enter a number between 1 and 20';
        return;     // return stops the function from running further if the condition is true
    }

    if (num === lucky) {
        msg.textContent = 'Hooray! You won!';
        main.style.backgroundColor = '#60b347';
        if (scoreValue > highScoreValue) {
            highScoreValue = scoreValue;
            highScore.textContent = highScoreValue;
        }
    }
    else {
        main.style.backgroundColor = '#DD3333';
        scoreValue--;
        if (num > lucky) {
            msg.textContent = 'Your guess is Too high!';
        }
        else {
            msg.textContent = 'Your guess is Too low!';
        }
    }
    score.textContent = scoreValue;

    if (scoreValue === 0) {
        msg.textContent = 'You lost!';
        main.style.backgroundColor = '#b60c0c';
        check.style.display = 'none';
    }

}


check.addEventListener('click', checkNumber);

again.addEventListener('click', function () {
    scoreValue = 10;
    score.textContent = scoreValue;
    msg.textContent = 'Start guessing...';
    lucky = Math.floor(Math.random() * 20);
    main.style.backgroundColor = '#222';
    check.style.display = 'block';
    guess.value = '';
});