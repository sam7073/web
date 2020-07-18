const canvas = document.querySelector(".main-canvas"),
  context = canvas.getContext("2d"),
  fillbtn = document.querySelector(".fill-btn"),
  savebtn = document.querySelector(".save-btn"),
  colorbtns = document.querySelectorAll(".color-btn");

function changeColor(event) {
  const prevColor = localStorage.getItem("color");
  colorbtns.forEach(function (btn) {
    btn.innerHTML = "";
  });
  localStorage.setItem("color", event.target.style.backgroundColor);
  event.target.innerHTML = "v";
}

function mouseMoveHandler(event) {
  console.log(event);
}

function init() {
  colorbtns.forEach(function (btn) {
    btn.addEventListener("click", changeColor);
  });
  canvas.addEventListener("mousemove", mouseMoveHandler);
  if (localStorage.getItem("color") !== null) {
    colorbtns.forEach(function (btn) {
      if (btn.style.backgroundColor === localStorage.getItem("color")) {
        btn.innerHTML = "v";
      }
    });
  }
}
init();
