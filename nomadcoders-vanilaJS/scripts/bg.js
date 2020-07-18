const body = document.querySelector("body");
const IMAGE_NUMBER = 0;

function handleLoad() {
  console.log("123");
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  body.prepend(image);
  image.classList.add("bgimg");
}

function generateRandom() {
  const number = Math.floor(Math.random() * 5);
  return number;
}

function init() {
  const random = generateRandom();
  paintImage(random);
}

init();
