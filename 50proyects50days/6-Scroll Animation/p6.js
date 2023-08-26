boxes = document.getElementsByClassName("box");

function animateBoxes() {
    let boundings = [];
    for (i = 0; i < 9; i++) {
        boundings[i] = boxes[i].getBoundingClientRect();
    }
    for (i = 0; i < 9; i++) {
        if (boundings[i].top <= document.documentElement.clientHeight) {
            boxes[i].classList.add("onview");
        } else {
            boxes[i].classList.remove("onview");
        }
    }
}
window.addEventListener("load", function () {
    animateBoxes();
})

window.addEventListener("scroll", function(){
    animateBoxes();
})