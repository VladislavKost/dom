export const getRandomInt = () => {
  return Math.floor(Math.random() * (15 - 0 + 1));
};

export const updateGoblins = (goblins, imgTag) => {
  const value = getRandomInt();
  goblins[value].appendChild(imgTag);
};

export const startGame = () => {
  makeTable();
  const goblins = document.querySelectorAll(".game-field");
  const imgTag = document.createElement("img");
  imgTag.classList.add("goblin");
  imgTag.src =
    "https://github.com/netology-code/ahj-homeworks/raw/video/dom/pic/goblin.png";

  setInterval(() => updateGoblins(goblins, imgTag), 1000);
};
export const makeTable = () => {
  const body = document.querySelector("body");
  const tableTag = document.createElement("table");
  body.appendChild(tableTag);
  for (let _ of Array(4).keys()) {
    const trTag = document.createElement("tr");
    for (let _ of Array(4).keys()) {
      const tdTag = document.createElement("td");
      const divTag = document.createElement("div");
      divTag.classList.add("game-field");
      tdTag.appendChild(divTag);
      trTag.appendChild(tdTag);
    }
    tableTag.appendChild(trTag);
  }
};

document.addEventListener("DOMContentLoaded", startGame);
