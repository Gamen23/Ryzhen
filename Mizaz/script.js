const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
var tabLinks = document.getElementsByClassName("tab-links"),
  tabContents = document.getElementsByClassName("tab-contents");
var tabLinks = document.getElementsByClassName("tab-links"),
  tabContents = document.getElementsByClassName("tab-contents");

// On openTab fucntion call
function openTab(tabname) {
  for (item of tabLinks) {
    item.classList.remove("active-link");
  }
  for (item of tabContents) {
    item.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


const text = document.querySelector(".sectext");



        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Mizaz";
            }, 0);
            setTimeout(() => {
                text.textContent = "Student";
            }, 4000);
            setTimeout(() => {
                text.textContent = "gamer";
            }, 8000); //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 12000);
        
        
        
        