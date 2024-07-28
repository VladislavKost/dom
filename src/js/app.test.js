import { getRandomInt, updateGoblins, startGame } from "./app";

describe("getRandomInt", () => {
  it("should return a random integer between 0 and 8", () => {
    for (let i = 0; i < 100; i++) {
      const result = getRandomInt();
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(15);
    }
  });
});

describe("updateGoblins", () => {
  it("should add the image tag to a random goblin element", () => {
    const goblins = Array.from({ length: 16 }, () =>
      document.createElement("div"),
    );

    const imgTag = document.createElement("img");

    updateGoblins(goblins, imgTag);

    const goblinWithImage = goblins.find((goblin) => goblin.contains(imgTag));
    expect(goblinWithImage).not.toBeNull();
  });
});

describe("startGame", () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
        <div class="game-field"></div>
      `;
  });

  it("should start the game and append goblin images", async () => {
    jest.useFakeTimers();
    startGame();

    // Прожимаем 1 секунду
    jest.advanceTimersByTime(1000);

    // Проверяем, что хотя бы один элемент img был добавлен
    const goblins = document.querySelectorAll(".game-field");
    let hasGoblin = Array.from(goblins).some(
      (goblin) => goblin.querySelector(".goblin") !== null,
    );

    expect(hasGoblin).toBe(true);

    jest.useRealTimers();
  });
});
