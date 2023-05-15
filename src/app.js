/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const CARDS = {
  "♥": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  "♠": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  "♣": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  "♦": ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
};

const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
const getRandomNumber = (array) => {
  return [Math.floor(Math.random() * array.length)];
};

const getRandomCard = () => {
  const card = { ...CARDS };
  let randomKey = getRandomItem(Object.keys(card));
  let indexCard = getRandomNumber(card[randomKey]);
  let randomCard = card[randomKey][indexCard];

  const divCard = document.querySelector("#randomCard");

  divCard.style.background = "white";

  if (card[randomKey].length === 0) {
    delete card[randomKey];
    randomKey = getRandomItem(Object.keys(card));
    indexCard = getRandomNumber(card[randomKey]);
    randomCard = card[randomKey][indexCard];
  }

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

  console.log(`${randomKey} : ${randomCard} // ${card[randomKey]}`);
  card[randomKey].splice(indexCard, 1);
};

document
  .getElementById("generateCard")
  .addEventListener("click", getRandomCard, false);
