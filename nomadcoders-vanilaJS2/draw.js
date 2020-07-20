let isMouseDown = false;
let fillMode = true;

function mouseMoveHandler(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (isMouseDown === true) {
    context.lineTo(x, y);
    context.stroke();
  }
}
function mouseDownHandler(event) {
  if (event.button === 0) {
    if (fillMode) {
      context.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      isMouseDown = true;
      context.beginPath();
      context.moveTo(event.offsetX, event.offsetY);
    }
  }
}
function mouseUpHandler(event) {
  isMouseDown = false;
  context.closePath();
}
function mouseLeaveHandler(event) {
  isMouseDown = false;
}

function fillClickHandler(event) {
  if (fillMode === true) {
    fillbtn.innerHTML = "paint";
    fillMode = false;
  } else {
    fillbtn.innerHTML = "fill";
    fillMode = true;
  }
}

function ctmHanlder(event) {
  event.preventDefault();
}

function saveBtnCliekHandler(event) {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "image";
  link.click();
}

function init() {
  canvas.addEventListener("mousemove", mouseMoveHandler);
  canvas.addEventListener("mousedown", mouseDownHandler);
  canvas.addEventListener("mouseup", mouseUpHandler);
  canvas.addEventListener("mouseleave", mouseLeaveHandler);
  canvas.addEventListener("contextmenu", ctmHanlder);
  fillbtn.addEventListener("click", fillClickHandler);
  savebtn.addEventListener("click", saveBtnCliekHandler);
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "black";
}

init();
