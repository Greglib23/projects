nextt = document.getElementsByClassName("next");
previous = document.getElementsByClassName("prev");
numbers = document.getElementsByClassName("number");
animated = document.getElementsByClassName("animated-square");
pos = 1;

function next() {
    if (pos == 1) {
        pos++;
        previous[0].style.background = "#3498DB";
        animated[0].style.left = "0%";
        numbers[1].style.border = "solid #3498DB 4px";
        previous[0].style.cursor="pointer"
    }
    else if (pos == 2) {
        pos++;
        animated[1].style.left = "0%";
        numbers[2].style.border = "solid #3498DB 4px";
    }
    else if (pos == 3) {
        pos++;
        nextt[0].style.background = "#E0E0E0";
        animated[2].style.left = "0%";
        numbers[3].style.border = "solid #3498DB 4px";
        nextt[0].style.cursor="not-allowed"
    }
}
function prev() {
    if (pos == 4) {
        pos--;
        nextt[0].style.background = "#3498DB";
        animated[2].style.left = "-100%";
        numbers[3].style.border = "solid #E0E0E0 4px";
        nextt[0].style.cursor="pointer"
    }
    else if (pos == 3) {
        pos--;
        animated[1].style.left = "-100%";
        numbers[2].style.border = "solid #E0E0E0 4px";
    }
    else if (pos == 2) {
        pos--;
        previous[0].style.background = "#E0E0E0";
        animated[0].style.left = "-100%";
        numbers[1].style.border = "solid #E0E0E0 4px";
        previous[0].style.cursor="not-allowed"
    }
}

nextt[0].addEventListener("click", function () { next() });
previous[0].addEventListener("click", function () { prev() });
