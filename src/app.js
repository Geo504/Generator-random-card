/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const card = {
  heart: ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  spades: ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  clover: ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  diamond: ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
};

const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
const getRandomNumber = (array) => {
  return [Math.floor(Math.random() * array.length)];
};

const getRandomCard = () => {
  let randomKey = getRandomItem(Object.keys(card));
  let randomCard = card[randomKey][getRandomNumber(card[randomKey])];

  const divCard = document.querySelector("#randomCard");

  divCard.style.display = "block";

  randomKey === "heart" || randomKey === "diamond"
    ? (divCard.style.color = "darkred")
    : (divCard.style.color = "black");

  let icon = "fa-heart";
  if (randomKey === "diamond") icon = "fa-diamond";
  if (randomKey === "clover") icon = "fa-clover";
  if (randomKey === "spades") icon = "fa-spa";

  divCard.innerHTML = `
    <span><i class="fa-solid ${icon}"></i></span>
    <p class="cardNumber">${randomCard}</p>
    <span class="d-flex"><i class="fa-solid ${icon} ms-auto"></i></span>
    `;
};

document
  .getElementById("generateCard")
  .addEventListener("click", getRandomCard, false);
