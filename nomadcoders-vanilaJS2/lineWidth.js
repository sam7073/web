function rangeHandler(event) {
  context.lineWidth = event.target.value;
}

function init() {
  if (lineWidthRange) {
    lineWidthRange.addEventListener("input", rangeHandler);
  }
}
init();
