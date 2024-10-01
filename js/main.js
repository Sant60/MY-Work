const txtarea = document.getElementById("traits");
let traits = [];
let i = 0;
let txt = "";
let fulltxt = "";
let isdeleting = false;
names = JSON.parse(txtarea.getAttribute("traits"));
console.log(names);

execute();

function execute() {
  fulltxt = names[i % names.length];
  if (isdeleting) txt = fulltxt.substring(0, txt.length - 1);
  else txt = fulltxt.substring(0, txt.length + 1);

  txtarea.innerHTML = txt;
  if (txt.length == fulltxt.length) isdeleting = true;
  if (txt.length == 0) {
    i++;
    isdeleting = false;
  }

  if (isdeleting)
    if (txt.length == fulltxt.length) setTimeout(execute, 1000);
    else setTimeout(execute, 100);
  else setTimeout(execute, 100);
}

const navbar = document.getElementById("topnav");
const nameLogo = document.getElementById("name-logo");
const navItems = document.querySelectorAll(".nav-item");

window.onscroll = () => {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
    nameLogo.classList.add("scrolled");
    navItems.forEach((item) => {
      item.classList.add("scrolled");
    });
  } else {
    navbar.classList.remove("scrolled");
    nameLogo.classList.remove("scrolled");
    navItems.forEach((item) => {
      item.classList.remove("scrolled");
    });
  }
};

$("body").scrollspy({ target: "#topnav" });
$("#topnav a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        window.location.hash = hash;
      }
    );
  }
});
