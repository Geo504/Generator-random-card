/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cards = {
  "♥": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  "♠": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  "♣": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  "♦": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
};

const getRandomItem = array => {
  return array[Math.floor(Math.random() * array.length)];
};
const getRandomNumber = array => {
  return [Math.floor(Math.random() * array.length)];
};

const getRandomCard = () => {
  const divCard = document.querySelector("#randomCard");
  divCard.style.background = "white";

  if (Object.keys(cards).length === 0) {
    divCard.innerHTML = `
    <span class="col-12">Out of Cards</span>
    <p class="cardNumber">🤡</p>
    <span class="col-12 text-end">Out of Cards</span>
    `;
  }

  if (Object.keys(cards).length > 0) {
    let randomKey = getRandomItem(Object.keys(cards));
    let indexCard = getRandomNumber(cards[randomKey]);
    let randomCard = cards[randomKey][indexCard];

    randomKey === "♥" || randomKey === "♦"
      ? (divCard.style.color = "darkred")
      : (divCard.style.color = "black");

    let icon = "♥";
    if (randomKey === "♦") icon = "♦";
    if (randomKey === "♣") icon = "♣";
    if (randomKey === "♠") icon = "♠";

    divCard.innerHTML = `
      <span class="col-12"><i>${icon}</i></span>
      <p class="cardNumber">${randomCard}</p>
      <span class="col-12 d-flex"><i class="ms-auto">${icon}</i></span>
      `;

    cards[randomKey].splice(indexCard, 1);

    if (cards[randomKey].length === 0) delete cards[randomKey];
  }
};

const getDeckOfCards = () => {
  return location.reload();
};

document
  .getElementById("generateCard")
  .addEventListener("click", getRandomCard, false);

document
  .getElementById("generateDeck")
  .addEventListener("click", getDeckOfCards, false);
