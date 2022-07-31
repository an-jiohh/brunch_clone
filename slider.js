// header nav_bar
document.querySelector("#header button").addEventListener("click", function () {
  document.querySelector("#header .nav").style.marginLeft = 0;
  document.querySelector("#header .nav_close").style.marginLeft = 0;
});
document
  .querySelector("#header .nav_close")
  .addEventListener("click", function () {
    document.querySelector("#header .nav").style.marginLeft = "-260px";
    document.querySelector("#header .nav_close").style.marginLeft = "-100vw";
  });

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

//header_group
const editor_pic = document.querySelector(".intro_brunch");
const editor_pic_height = editor_pic.clientHeight + 60;
const header_group = document.querySelector(".header_group");
document.addEventListener("scroll", () => {
  if (window.scrollY >= editor_pic_height) {
    header_group.classList.add("fix");
  } else {
    header_group.classList.remove("fix");
  }
});

// top_button
document.querySelector(".top_button").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const up_button_height = document
  .querySelector(".button_box")
  .getBoundingClientRect().top;
const up_button = window.pageYOffset + up_button_height;
const body_height = document.querySelector("body").clientHeight;
const top_button = document.querySelector(".top_button");
document.addEventListener("scroll", () => {
  console.log(window.scrollY, up_button_height);
  if (window.scrollY >= 3270) {
    top_button.classList.remove("fix_button");
  } else {
    if (window.scrollY <= 1800) {
      top_button.classList.add("hidden");
    } else {
      top_button.classList.remove("hidden");
      top_button.classList.add("fix_button");
    }
  }
});
