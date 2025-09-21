"use strict";

let message = document.querySelector(".message").textContent;
const body = document.querySelector("body");
let score = Number(document.querySelector(".score").textContent);
let highScore = Number(document.querySelector(".highscore").textContent);
let guess = Math.trunc(Math.random() * (1000 - 100 + 1)) + 100;
document.querySelector(".check").addEventListener("click", function () {
  if (score <= 0) {
    message = "Game Over😒";
    body.style.backgroundColor = "red";
    score = 0;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = message;
    return;
  }

  const inputValue = Number(document.querySelector(".guess").value);
  const newNum = inputValue.toString().split("").map(Number);
  const newGuess = guess.toString().split("").map(Number);

  let correctDigits = 0;
  for (let i = 0; i < newNum.length; i++) {
    if (newNum[i] === newGuess[i]) {
      correctDigits++;
    }
  }

  if (inputValue === guess) {
    document.querySelector(".number").textContent = guess;
    body.style.backgroundColor = "#60b347";
    message = "🥳 Bravo Correct Number";
    highScore += score;
    document.querySelector(".highscore").textContent = highScore;
    score = 30;
  } else if (inputValue < 100) {
    score--;
    message = "Please Write 3 Digit 👌";
  } else if (correctDigits === 2) {
    message = "two numbers are correct 2️⃣";
    score--;
  } else if (correctDigits === 1) {
    message = "one number is correct 1️⃣";
    score--;
  } else {
    message = "❌ No numbers correct";
    score--;
  }

  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = message;
  document.querySelector(".guess").value = ""; // ← مسح الانبوت بعد كل محاولة
});


document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  body.style.backgroundColor = "#222";
  message = "Start guessing...";
  document.querySelector(".message").textContent = message;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  guess = Math.trunc(Math.random() * (1000 - 100 + 1)) + 100; // رقم جديد
  console.log("Secret:", guess);
});
console.log("Secret:", guess);

