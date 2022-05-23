let icon = document.getElementById("icon");
let search = document.getElementById("search");
let Nav = document.getElementById("nav");
let Close = document.getElementById("close");
let menueToggle = document.getElementById("toggle");
let Icon = document.getElementById("icon2");
let Ul = document.getElementById("ul");
let Vid = document.getElementById("video");
let con = document.getElementById("count");
let counter = 0;
let favs = document.querySelectorAll(".heart");
// dark ligth theme
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    Vid.src = "images/wadhaLight.mp4";
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    Vid.src = "images/wadhaDark.mp4";
  }
};
// search bar toggle
search.addEventListener("click", () => {
  Nav.classList.add("search-mode");
});
Close.addEventListener("click", () => {
  Nav.classList.remove("search-mode");
  document.getElementById("input-search").value = "";
});
// responsive menu
menueToggle.onclick = function () {
  if (Icon.classList.contains("fa-bars")) {
    Icon.classList.remove("fas");
    Icon.classList.remove("fa-bars");
    Icon.classList.add("fal");
    Icon.classList.add("fa-times");
    Ul.classList.add("active");
    document.getElementById("over").style.visibility = "hidden";
    document.getElementById("nav").classList.add("active");
  } else {
    Icon.classList.remove("fal");
    Icon.classList.remove("fa-times");
    Icon.classList.add("fas");
    Icon.classList.add("fa-bars");
    Ul.classList.remove("active");
    document.getElementById("over").style.visibility = "visible";
    document.getElementById("nav").classList.remove("active");
  }
};

// count favourits
favs.forEach((fav) => {
  fav.onclick = function () {
    if (fav.classList.contains("fal")) {
      counter++;
      con.innerHTML = counter;
      fav.classList.remove("fal");
      fav.classList.remove("fa-heart");
      fav.classList.add("fas");
      fav.classList.add("fa-heart");
    } else {
      counter--;
      con.innerHTML = counter;
      fav.classList.remove("fas");
      fav.classList.remove("fa-heart");
      fav.classList.add("fal");
      fav.classList.add("fa-heart");
    }
  };
});
// on scroll animation
const square = document.querySelector(".banner");
square.classList.remove("banner-transition");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square.classList.add("banner-transition");
      return;
    }
    square.classList.remove("banner-transition");
  });
});
observer.observe(document.querySelector(".welcome"));

const Square = document.querySelector(".article");
Square.classList.remove("article-transition");
const Abserve = new IntersectionObserver((seals) => {
  seals.forEach((seal) => {
    if (seal.isIntersecting) {
      Square.classList.add("article-transition");
      return;
    }
    Square.classList.remove("article-transition");
  });
});
Abserve.observe(document.querySelector(".welcome"));
//scroll to top
let span = document.getElementById("top");
window.onscroll = () => {
  this.scrollY >= 1000
    ? span.classList.add("show")
    : span.classList.remove("show");
};
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth" ,
  });
};
