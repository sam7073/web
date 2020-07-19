let isMouseDown = false;

function mouseMoveHandler(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (isMouseDown === true) {
    context.lineTo(x, y);
    context.stroke();
  }
}
function mouseDownHandler(event) {
  isMouseDown = true;
  context.beginPath();
  context.moveTo(event.offsetX, event.offsetY);
}
function mouseUpHandler(event) {
  isMouseDown = false;
  context.closePath();
}
function mouseLeaveHandler(event) {
  isMouseDown = false;
}
function init() {
  canvas.addEventListener("mousemove", mouseMoveHandler);
  canvas.addEventListener("mousedown", mouseDownHandler);
  canvas.addEventListener("mouseup", mouseUpHandler);
  canvas.addEventListener("mouseleave", mouseLeaveHandler);
}

init();
