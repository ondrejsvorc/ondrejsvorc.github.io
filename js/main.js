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

// document.onreadystatechange = function() 
// {
//     if (document.readyState !== "complete") 
//     {
//         document.querySelector("body").style.visibility = "hidden";
//         document.querySelector(".loader-container").style.visibility = "visible";
//     } 
//     else 
//     {
//         document.querySelector(".loader-container").style.display = "none";
//         document.querySelector("body").style.visibility = "visible";
//     }
// };

document.querySelector("body").style.visibility = "hidden";
document.querySelector(".loader-container").style.visibility = "visible";

window.addEventListener('load', (event) => {
    document.querySelector(".loader-container").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  });

window.addEventListener("scroll", function() 
{
    let revealElements = document.querySelectorAll('.reveal')

    for (let i = 0; i < revealElements.length; i++)
    {
        let revealPoint = 100;

        if (revealElements[i].getBoundingClientRect().top < window.innerHeight - revealPoint)
        {
            revealElements[i].classList.add('active');
        }
        else 
        {
            revealElements[i].classList.remove('active');
        }
    }
});

footerParagraph.innerHTML += " " + new Date().getFullYear();