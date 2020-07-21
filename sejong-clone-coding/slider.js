const dots = document.querySelectorAll(".dot"),
  images = document.querySelectorAll(".main-image"),
  contents = document.querySelectorAll(".slide-contents");
let currentDot = 0;
function dotClickHandler(event) {
  if (event.target.innerHTML !== currentDot) {
    dots[currentDot].classList.toggle("active");
    images[currentDot].style.opacity = 0;
    contents[currentDot].classList.toggle("invisible");

    currentDot = event.target.innerHTML;

    dots[currentDot].classList.toggle("active");
    images[currentDot].style.opacity = 1;
    contents[currentDot].classList.toggle("invisible");
  }
}

function init() {
  dots.forEach(function (dot) {
    dot.addEventListener("click", dotClickHandler);
  });
}

init();
