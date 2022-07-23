var page = 1;

document.querySelector(".page_img1").addEventListener("click", function () {
  document.querySelector(".picture_container").style.transform =
    "translate(0px)";
});

document.querySelector(".page_img2").addEventListener("click", function () {
  page = 2;
  document.querySelector(".picture_container").style.transform =
    "translate(-980px)";
});

document.querySelector(".page_img3").addEventListener("click", function () {
  page = 3;
  document.querySelector(".picture_container").style.transform =
    "translate(-1960px)";
});

document.querySelector(".page_img4").addEventListener("click", function () {
  page = 4;
  document.querySelector(".picture_container").style.transform =
    "translate(-2940px)";
});
