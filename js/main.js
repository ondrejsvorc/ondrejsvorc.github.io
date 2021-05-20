let tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
let tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

const section = document.querySelector("#about-me")

if (section !== null){
  const about = document.querySelector(".nav-link.about").addEventListener('click', (e) => {
    e.preventDefault();
    section.scrollIntoView();
  });
}

const footerParagraph = document.querySelector("footer p");

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

footerParagraph.innerHTML += " " + new Date().getFullYear();
