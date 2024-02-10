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
  score++; // Increment the score by 1
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = score;
}

// Function to start the score increment every second
let intervalId;
function startScoreIncrement() {
  intervalId = setInterval(incrementScore, 1000); // increment score every 1000 milliseconds (1 second)
}

// Event listener for the "Click Me" button
const clickMeButton = document.getElementById("click-me-button");
clickMeButton.addEventListener("click", () => {
  // Increment the score when the button is clicked
  incrementScore();
});

// Function to purchase cursor
function purchaseCursor(cost) {
  // Perform any necessary actions to purchase the cursor
  if (score >= cost) {
    score -= cost; // Decrease score by the cost
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = score;
    startScoreIncrement(); // Start the score increment when cursor is purchased
  } else {
    alert("Not enough score to purchase a cursor!");
  }
}

// Event listener for the buy cursor button
const buyCursorButton = document.getElementById("buySingleCursor");
buyCursorButton.addEventListener("click", () => {
  purchaseCursor(10); // Cost of single cursor is 10
});

// Event listener for the second buy cursor button
const buySecondCursorButton = document.getElementById("buySecondCursor");
buySecondCursorButton.addEventListener("click", () => {
  purchaseCursor(100); // Cost of second cursor is 100
});

// Event listener for the third buy cursor button
const buyThirdCursorButton = document.getElementById("buyThirdCursor");
buyThirdCursorButton.addEventListener("click", () => {
  purchaseCursor(1000); // Cost of third cursor is 1000
});