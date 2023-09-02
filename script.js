const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const rollBtn1 = document.getElementById('roll1');
const rollBtn2 = document.getElementById('roll2');
const resetBtn = document.getElementById('reset');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');

let currentPlayer = player1;
let currentPlayerScore = score1;
let otherPlayerScore = score2;

rollBtn1.addEventListener('click', () => rollDice(player1, score1));
rollBtn2.addEventListener('click', () => rollDice(player2, score2));
resetBtn.addEventListener('click', resetGame);

function rollDice(player, score) {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    player.style.backgroundImage = `url('dice${diceValue}.png')`;
    
    currentPlayerScore.textContent = parseInt(currentPlayerScore.textContent) + diceValue;

    if (parseInt(currentPlayerScore.textContent) >= 30) {
        player.querySelector('h2').textContent += ' - Winner!';
        rollBtn1.disabled = true;
        rollBtn2.disabled = true;
        resetBtn.disabled = false;
    } else {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        currentPlayerScore = currentPlayer === player1 ? score1 : score2;
        otherPlayerScore = currentPlayer === player1 ? score2 : score1;

        rollBtn1.disabled = currentPlayer === player2;
        rollBtn2.disabled = currentPlayer === player1;
    }
}

function resetGame() {
    player1.style.backgroundImage = '';
    player2.style.backgroundImage = '';
    score1.textContent = 0;
    score2.textContent = 0;
    player1.querySelector('h2').textContent = 'Player 1';
    player2.querySelector('h2').textContent = 'Player 2';
    currentPlayer = player1;
    currentPlayerScore = score1;
    otherPlayerScore = score2;
    rollBtn1.disabled = false;
    rollBtn2.disabled = true;
    resetBtn.disabled = true;
}
