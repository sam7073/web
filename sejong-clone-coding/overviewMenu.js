const overviewMenuOpenBtn = document.querySelector(".nav-open-btn"),
  overviewMenuCloseBtn = document.querySelector(".nav-close-btn"),
  overviewMenu = document.querySelector(".overview-menu");

function overviewMenuOpenBtnClickHandler() {
  overviewMenu.style.display = "block";
  overviewMenuOpenBtn.style.display = "none";
  overviewMenuCloseBtn.style.display = "block";
}

function overviewMenuCloseBtnClickHandler() {
  overviewMenu.style.display = "none";
  overviewMenuOpenBtn.style.display = "block";
  overviewMenuCloseBtn.style.display = "none";
}

function init() {
  overviewMenuOpenBtn.addEventListener(
    "click",
    overviewMenuOpenBtnClickHandler
  );
  overviewMenuCloseBtn.addEventListener(
    "click",
    overviewMenuCloseBtnClickHandler
  );
}
init();
