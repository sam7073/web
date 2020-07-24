const bannerImages = document.querySelector(".banner-images"),
  bannerNum = document.querySelector(".current-banner-num"),
  bannerNextButton = document.querySelector(".banner-next-btn"),
  bannerPrevButton = document.querySelector(".banner-prev-btn"),
  bannerPlayButton = document.querySelector(".banner-play-btn"),
  bannerPauseButton = document.querySelector(".banner-pause-btn");
const INTERVAL = 3000;
let currentImage = 1;
let bannerInterval;

function changeSlideImage() {
  const move = currentImage * 330;
  bannerImages.style.transition = 300 + "ms";
  bannerImages.style.transform = "translate3d(-" + move + "px, 0px, 0px)";
}

function bannerNextBtnHandler() {
  currentImage = currentImage + 1;
  changeSlideImage();
  if (currentImage >= 9) {
    currentImage = 1;
    bannerNum.innerHTML = currentImage;
    setTimeout(function () {
      bannerImages.style.transition = 0 + "ms";
      bannerImages.style.transform =
        "translate3d(-" + currentImage * 330 + "px, 0px, 0px)";
    }, 300);
  }
  bannerNum.innerHTML = currentImage;
}
function bannerPrevBtnHandler() {
  currentImage = currentImage - 1;
  changeSlideImage();
  if (currentImage <= 0) {
    currentImage = 8;
    bannerNum.innerHTML = currentImage;
    setTimeout(function () {
      bannerImages.style.transition = 0 + "ms";
      bannerImages.style.transform =
        "translate3d(-" + currentImage * 330 + "px, 0px, 0px)";
    }, 300);
  }
  bannerNum.innerHTML = currentImage;
}

function bannerPlayBtnHandler() {
  bannerPlayButton.classList.toggle("active-btn");
  bannerPauseButton.classList.toggle("active-btn");
  bannerInterval = setInterval(bannerNextBtnHandler, INTERVAL);
}

function bannerPauseBtnHandler() {
  bannerPlayButton.classList.toggle("active-btn");
  bannerPauseButton.classList.toggle("active-btn");
  clearInterval(bannerInterval);
}

function init() {
  bannerNextButton.addEventListener("click", bannerNextBtnHandler);
  bannerPrevButton.addEventListener("click", bannerPrevBtnHandler);
  bannerPlayButton.addEventListener("click", bannerPlayBtnHandler);
  bannerPauseButton.addEventListener("click", bannerPauseBtnHandler);
  bannerInterval = setInterval(bannerNextBtnHandler, INTERVAL);
}
init();
