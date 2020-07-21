const menus = document.querySelectorAll(".news-menu-ul li button"),
  iframes = document.querySelectorAll("iframe");
let currentFrame = 0;
function changeMenuHandler(event) {
  menus[currentFrame].classList.toggle("on");
  iframes[currentFrame].classList.toggle("invisible");

  menus.forEach(function (menu, index) {
    if (menu === event.target) {
      currentFrame = index;
    }
  });

  menus[currentFrame].classList.toggle("on");
  iframes[currentFrame].classList.toggle("invisible");
}

function init() {
  menus.forEach(function (menu) {
    menu.addEventListener("click", changeMenuHandler);
  });
}
init();
