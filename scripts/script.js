const tickRate = 1000 / 30; // 30 frames per second(fps)
let score = 0;

// Buildings are made from classes here.
let cursor = new Building();

// Manual click function, add one point to score per click
function scorePlusPlus() {
    score++;
}

// Everything in the following function updates every tick as set at the top
function updatePage() {
    document.getElementById("score").innerHTML = score;
}
setInterval(updatePage, tickRate);

// Function to increment the score
function incrementScore() {
  const scoreElement = document.getElementById("score");
  score++;
  scoreElement.textContent = score;
}

// Function to start the score increment every second
let intervalId;
function startScoreIncrement() {
  intervalId = setInterval(incrementScore, 1000); // increment score every 1000 milliseconds (1 second)
}

// Function to purchase cursor
function purchaseCursor() {
    // Perform any necessary actions to purchase the cursor
    if (score >= 10) {
      score -= 10; // Decrease score by ten
      const scoreElement = document.getElementById("score");
      scoreElement.textContent = score;
      startScoreIncrement(); // Start the score increment when cursor is purchased
    } else {
      alert("Not enough score to purchase a cursor!");
    }
  }

// Event listener for the buy cursor button
const buyCursorButton = document.getElementById("buySingleCursor");
buyCursorButton.addEventListener("click", purchaseCursor);