const canvas = document.querySelector(".main-canvas"),
  context = canvas.getContext("2d"),
  fillbtn = document.querySelector(".fill-btn"),
  savebtn = document.querySelector(".save-btn"),
  colorbtns = document.querySelectorAll(".color-btn"),
  lineWidthRange = document.querySelector(".width-range");

function initCanvas() {
  canvas.width = 500;
  canvas.height = 500;
  context.lineWidth = 2.5;
}

function initColor() {
  colorbtns.forEach(function (btn) {
    if (btn.style.backgroundColor === "black") {
      btn.innerHTML = "v";
    }
  });
  canvas.strokeStyle = "black";
}

function changeColor(event) {
  colorbtns.forEach(function (btn) {
    btn.innerHTML = "";
  });
  event.target.innerHTML = "v";
  context.strokeStyle = event.target.style.backgroundColor;
}

function init() {
  initCanvas();
  initColor();
  colorbtns.forEach(function (btn) {
    btn.addEventListener("click", changeColor);
  });
}
init();
