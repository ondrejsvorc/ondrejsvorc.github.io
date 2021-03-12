const navBar = document.querySelector("#navBar");
const navBarHeight = document.querySelector(".banner").clientHeight;

window.addEventListener("scroll", function() 
{
    let scrollY = window.scrollY;

    if (scrollY > 0)
    {
        navBar.style.top = -navBarHeight + "px";
        console.log("true");
    }
    else
    {
        navBar.style.top = 0;
        console.log("false");
    }
});


