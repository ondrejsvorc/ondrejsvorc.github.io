const schoolName = document.querySelector(".content > p > a");
const aboutMePic = document.querySelector(".pic");

schoolName.addEventListener("mouseover", PictureChange);
aboutMePic.style.transition = "0.4s ease-out";

document.querySelectorAll(".skills").forEach((element) => {
  element.addEventListener("mouseover", PictureChange);
  element.addEventListener("mouseout", ScaleToNormal);
});

function PictureChange(event) {
  var sender = event.target;

  switch (sender.id) {
    case "school":
      aboutMePic.style.background =
        "url('/resources/logo.png') no-repeat center";
      aboutMePic.style.backgroundSize = "80%";
      break;

    case "csharp":
      sender.style.transform = "scale(1.2)";
      aboutMePic.style.background =
        "url('/resources/skills/csharp.png') no-repeat center";
      aboutMePic.style.backgroundSize = "80%";
      break;

    case "html":
      sender.style.transform = "scale(1.2)";
      aboutMePic.style.background =
        "url('/resources/skills/html.png') no-repeat center";
      aboutMePic.style.backgroundSize = "80%";
      break;

    case "css":
      sender.style.transform = "scale(1.2)";
      aboutMePic.style.background =
        "url('/resources/skills/css.png') no-repeat center";
      aboutMePic.style.backgroundSize = "80%";
      break;

    case "js":
      sender.style.transform = "scale(1.1)";
      aboutMePic.style.background =
        "url('/resources/skills/js.png') no-repeat center";
      aboutMePic.style.backgroundSize = "80%";
      break;
  }
}

function ScaleToNormal(event) {
  event.target.style.transform = "scale(1)";
}

const text = "Ondřej Švorc";
let index = 0;
var a = true;

document
  .querySelector(".mainPage .myPic")
  .addEventListener("mouseover", WriteText);

function WriteText() {
  document.querySelector(".mainPage h1").innerHTML = text.slice(0, index++);
  setTimeout(WriteText, 200);
}

document.querySelector(".navDiv .navBar li:first-child").classList.add("underlined");

window.addEventListener("scroll", () => {
      
  const scrolled = window.scrollY;
  console.log(window.scrollY);

  if (scrolled >= 0 && scrolled < 700)
  {
    // document.querySelector(".navDiv .navBar li:first-child").style.borderBottom = "2px solid white";
  }

 });