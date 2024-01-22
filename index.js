const cards = [
  "imgs/1.png",
  "imgs/2.png",
  "imgs/3.png",
  "imgs/4.png",
  "imgs/5.png",
  "imgs/6.png",
  "imgs/7.png",
  "imgs/8.png",
];

let gameScore = 0;
const score = document.createElement("h1");
score.textContent = `Score: ${gameScore}`;
document.body.append(score);
const gameContainer = document.createElement("div");
gameContainer.classList.add("game-container");
document.body.append(gameContainer);
const doubledCards = cards.concat(cards);
const shuffledCards = shuffle(doubledCards);
console.log(shuffledCards);

function shuffle(array) {
  array.sort(() => 0.5 - Math.random());
  return array;
}

for (let i = 0; i < shuffledCards.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card-container");
  gameContainer.append(card);
  const frontImg = document.createElement("img");
  frontImg.classList.add("front");
  const backImg = document.createElement("img");
  backImg.classList.add("back");
  frontImg.src = shuffledCards[i];
  backImg.src = "imgs/back.png";
  card.append(frontImg);
  card.append(backImg);
}

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset!";
gameContainer.append(resetBtn);
resetBtn.addEventListener("click", () => {
  location.reload();
});

const cardContainers = document.querySelectorAll(".card-container");
for (let i = 0; i < cardContainers.length; i++) {
  cardContainers[i].addEventListener("click", function cardFlipper() {
    cardContainers[i].classList.remove("flip");
    cardContainers[i].classList.add("front-sided");

    if ((document.querySelectorAll(".front-sided").length = 1)) {
      setTimeout(function () {
        document.querySelectorAll(".front-sided")[0].classList.add("flip");
      }, 5000);
    }

    setTimeout(function () {
      if (document.querySelectorAll(".front-sided").length > 1) {
        let firstCard = document.querySelectorAll(".front-sided")[0];
        let secondCard = document.querySelectorAll(".front-sided")[1];
        if (
          firstCard.firstElementChild.src === secondCard.firstElementChild.src
        ) {
          firstCard.classList.add("matched");
          secondCard.classList.add("matched");
          firstCard.classList.remove("front-sided");
          secondCard.classList.remove("front-sided");
          firstCard.classList.remove("flip");
          secondCard.classList.remove("flip");
          gameScore++;
          score.textContent = `Score: ${gameScore}`;
        }
        if (
          firstCard.firstElementChild.src !== secondCard.firstElementChild.src
        ) {
          firstCard.classList.remove("front-sided");
          secondCard.classList.remove("front-sided");
          firstCard.classList.add("flip");
          secondCard.classList.add("flip");
        }
        if (
          document.querySelectorAll(".matched").length === shuffledCards.length
        ) {
          alert("You won!");
        }
      }
    }, 1500);
  });
}

function timedFlip() {
  for (let i = 0; i < cardContainers.length; i++) {
    cardContainers[i].classList.toggle("flip");
  }
}

function timer() {
  setTimeout(timedFlip, 1000);
}

timer(timedFlip);
