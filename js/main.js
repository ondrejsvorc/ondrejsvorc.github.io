// const navBar = document.querySelector("#navBar");
// const navBarHeight = document.querySelector(".banner").clientHeight;

const footerParagraph = document.querySelector("footer p");

// window.addEventListener("scroll", function() 
// {
//     let scrollY = window.scrollY;

//     if (scrollY > 0)
//     {
//         navBar.style.top = -navBarHeight + "px";
//     }
//     else
//     {
//         navBar.style.top = 0;
//     }
// });

footerParagraph.innerHTML += " " + new Date().getFullYear();