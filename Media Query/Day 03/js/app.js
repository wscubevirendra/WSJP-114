var toggleBtn = document.querySelector("#toggleBtn");
var navBar = document.querySelector("header ul");


toggleBtn.addEventListener(
    "click",
    function () {
        navBar.classList.toggle("open")
    }
)