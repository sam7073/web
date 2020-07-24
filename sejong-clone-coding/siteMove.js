const moveBtn = document.querySelector(".site-move-btn");
function init() {
  moveBtn.addEventListener("click", function () {
    const currentSite = document.querySelector("select");
    window.open(currentSite.value, "_blank");
  });
}

init();
