const getRandomInt = () => {
  return Math.floor(Math.random() * (8 - 0 + 1));
};

const updateGoblins = (goblins, imgTag) => {
  const value = getRandomInt();
  goblins[value].appendChild(imgTag);
  console.log(goblins[value].children);
};

window.onload = function () {
  const goblins = document.querySelectorAll(".game-field");
  const imgTag = document.createElement("img");
  imgTag.classList.add("goblin");
  imgTag.src = "img/goblin.png";

  setInterval(() => updateGoblins(goblins, imgTag), 1000);
};
