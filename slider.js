// editor_pic
document.querySelector(".page_img1").addEventListener("click", function () {
  document.querySelector(".picture_container").style.transform =
    "translate(0px)";
});

document.querySelector(".page_img2").addEventListener("click", function () {
  document.querySelector(".picture_container").style.transform =
    "translate(-980px)";
});

document.querySelector(".page_img3").addEventListener("click", function () {
  document.querySelector(".picture_container").style.transform =
    "translate(-1960px)";
});

document.querySelector(".page_img4").addEventListener("click", function () {
  document.querySelector(".picture_container").style.transform =
    "translate(-2940px)";
});

//recomend_articles
let articles_page = 0;
document.querySelector(".right_button").addEventListener("click", function () {
  articles_page -= 960;
  console.log(articles_page);
  document.querySelector(
    ".wrap_slide"
  ).style.transform = `translate(${articles_page}px)`;
  document.querySelector(".left_button").style.display = "block";
  if (articles_page == -1920)
    document.querySelector(".right_button").style.display = "none";
});

document.querySelector(".left_button").addEventListener("click", function () {
  articles_page += 960;
  document.querySelector(
    ".wrap_slide"
  ).style.transform = `translate(${articles_page}px)`;
  document.querySelector(".right_button").style.display = "block";
  if (articles_page == 0)
    document.querySelector(".left_button").style.display = "none";
});
