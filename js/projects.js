const githubText = document.querySelector(".github-text");
const emailText = document.querySelector(".email-text");

document.querySelector("main").style.visibility = "hidden";
document.querySelector("#navBar").style.visibility = "hidden";
document.querySelector(".loader-container").style.visibility = "visible";

window.addEventListener("load", (event) => {
  document.querySelector(".loader-container").style.display = "none";
  document.querySelector("main").style.visibility = "visible";
  document.querySelector("#navBar").style.visibility = "visible";
});

window.addEventListener("scroll", function () {
    let revealElements = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < revealElements.length; i++) {
      let revealPoint = 100;
  
      if (
        revealElements[i].getBoundingClientRect().top <
        window.innerHeight - revealPoint
      ) {
        revealElements[i].classList.add("active");
      } else {
        revealElements[i].classList.remove("active");
      }
    }
  });

githubText.style.display = "none";
emailText.style.display = "none";

async function ShowGitHub() {
  githubText.classList.add("visible");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  githubText.classList.remove("visible");
}

async function ShowEmail() {
  emailText.classList.add("visible");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  emailText.classList.remove("visible");
}

const footerParagraph = document.querySelector("footer p");
footerParagraph.innerHTML += " " + new Date().getFullYear();