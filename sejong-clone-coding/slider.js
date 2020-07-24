const dots = document.querySelectorAll(".dot"),
  images = document.querySelectorAll(".main-image"),
  contents = document.querySelectorAll(".slide-contents"),
  playBtn = document.querySelector(".play-btn"),
  stopBtn = document.querySelector(".stop-btn");
let currentDot = 0;
let sliderInterval;

function changeDot(dotNum) {
  dots[currentDot].classList.toggle("active");
  images[currentDot].style.opacity = 0;
  contents[currentDot].classList.toggle("invisible");

  currentDot = dotNum;

  dots[currentDot].classList.toggle("active");
  images[currentDot].style.opacity = 1;
  contents[currentDot].classList.toggle("invisible");
}

function dotClickHandler(event) {
  if (event.target.innerHTML !== currentDot) {
    changeDot(parseInt(event.target.innerHTML));
  }
}

function setPlayInterval() {
  const newDot = (currentDot + 1) % 5;
  changeDot(newDot);
}

function playBtnClickHandler() {
  sliderInterval = setInterval(setPlayInterval, 3000);
}

function stopBtnClickHandler() {
  clearInterval(sliderInterval);
}

function init() {
  dots.forEach(function (dot) {
    dot.addEventListener("click", dotClickHandler);
  });
  playBtn.addEventListener("click", playBtnClickHandler);
  stopBtn.addEventListener("click", stopBtnClickHandler);
}

init();
