const navBar = document.querySelector("#navBar");
const navBarHeight = document.querySelector(".banner").clientHeight;

window.addEventListener("scroll", function() 
{
    let scrollY = window.scrollY;

    if (scrollY > 0)
    {
        navBar.style.top = -navBarHeight + "px";
    }
    else
    {
        navBar.style.top = 0;
    }
});


