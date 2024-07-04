function playTheGame() {
  const finalScore = getfinalScore();
  const knockOutNumber = getKnockOutNumber();
  let currentScore = 0;
  let allThrows = 0;

  while (currentScore < finalScore) {
    //1 Spelet har 2st tärningar.
    const dice1 = throwDice();
    const dice2 = throwDice();
    //4 Spelaren kastar båda tärningarna. Anteckna varje kasts resultat.
    const sumOfDice = dice1 + dice2;

    allThrows++;

    // Om spelaren kastar det angivna "knock out number" så ges minuspoäng
    if (sumOfDice === knockOutNumber) {
      currentScore -= knockOutNumber;
      console.log(
        `Throw ${allThrows}: Dice 1 = ${dice1}, Dice 2 = ${dice2}, Sum = ${sumOfDice} (KNOCK OUT!), Current Score = ${currentScore}`
      );
    } else {
      currentScore += sumOfDice;
      console.log(
        `Throw turn number ${allThrows}: Dice 1 = ${dice1}, Dice 2 = ${dice2}, Sum = ${sumOfDice}, Current Score = ${currentScore}`
      );
    }
  }
  alert("Game Over! Check the Console for the results");
  console.log(
    `Game Over! Final Score: ${currentScore} reached in ${allThrows} throws.`
  );
}

function throwDice() {
  return Math.floor(Math.random() * 6) + 1;
}

//2 Du som spelare väljer ett “knock out number” – antingen 6, 7, 8, eller 9.
function getKnockOutNumber() {
  let knockOutNumber = parseInt(
    prompt("Choose a knock out number (6, 7, 8, or 9):")
  );
  return knockOutNumber;
}

//3 Du som spelare väljer också vilken poäng som skall uppnås för att spelet skall avslutas.
function getfinalScore() {
  let finalScore = parseInt(prompt("Choose the target score to end the game:"));
  return finalScore;
}

playTheGame();
