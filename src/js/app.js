export const getRandomInt = () => {
  return Math.floor(Math.random() * (15 - 0 + 1));
};

export const updateGoblins = (goblins, imgTag) => {
  const value = getRandomInt();
  goblins[value].appendChild(imgTag);
};

export const startGame = () => {
  const goblins = document.querySelectorAll(".game-field");
  const imgTag = document.createElement("img");
  imgTag.src =
    "https://github.com/netology-code/ahj-homeworks/raw/video/dom/pic/goblin.png";

  setInterval(() => updateGoblins(goblins, imgTag), 1000);
};

document.addEventListener("DOMContentLoaded", startGame);
