const getRandomInt = () => {
  return Math.floor(Math.random() * (8 - 0 + 1));
};

const updateGoblins = (goblins, imgTag) => {
  const value = getRandomInt();
  goblins[value].appendChild(imgTag);
};

const ready = () => {
  const goblins = document.querySelectorAll(".game-field");
  const imgTag = document.createElement("img");
  imgTag.classList.add("goblin");
  imgTag.src =
    "https://github.com/netology-code/ahj-homeworks/raw/video/dom/pic/goblin.png";

  setInterval(() => updateGoblins(goblins, imgTag), 1000);
};

document.addEventListener("DOMContentLoaded", ready);
