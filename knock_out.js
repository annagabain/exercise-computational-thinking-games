function playTheGame() {
  const finalScore = getfinalScore();
  let currentScore = 0;
  let allThrows = 0;

  while (currentScore < finalScore) {
    const dice1 = throwDice();
    const dice2 = throwDice();
    const sumOfDice = dice1 + dice2;
    allThrows++;

    currentScore += sumOfDice;
    console.log(
      `Throw ${allThrows}: Dice 1 = ${dice1}, Dice 2 = ${dice2}, Sum = ${sumOfDice}, Current Score = ${currentScore}`
    );
  }
  alert("Game Over! Check the Console for the results");
  console.log(
    `Game Over! Final Score: ${currentScore} reached in ${allThrows} throws.`
  );
}

function throwDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function getfinalScore() {
  let finalScore = parseInt(
    prompt("Choose the target score to end the game:")
  );
  return finalScore;
}

playTheGame();
