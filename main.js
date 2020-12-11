let finishLine = document.querySelector(".content");
let grid = document.querySelectorAll("main > div > span");
let title = document.querySelector("main > h1");
let title2 = document.querySelector("main > h3");

window.addEventListener("beforeunload",function (){
    window.scrollTo(0, 0);
})

window.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < grid.length; i++) {
        grid[i].style.width = (133-i*3)+"%";
        if( i === grid.length-1){
            grid[i].style.width = (133-7*3)+"%";
        }
    }
})

function getTopDistance() {
    let distance = finishLine.getBoundingClientRect();
    return distance.top - window.innerHeight;
}

let max = getTopDistance();

function percentageOfMovement() {
    let moved = max - getTopDistance();
    if (getTopDistance() <= 0) {
        title2.style.opacity = "1";
        return 100;
    }
    title2.style.opacity = "0";
    return ((moved * 100) / max);
}

document.addEventListener("scroll", function () {
    let movedpercentage = percentageOfMovement();
    for (let i = 0; i < grid.length; i++) {
        grid[i].style.transform = "translate3d(-" + (movedpercentage+1) + "%,0,0)";
    }
    title.style.opacity = (100-movedpercentage)/100;
    title.style.transform = "translateY(-"+movedpercentage+"px)";
})


