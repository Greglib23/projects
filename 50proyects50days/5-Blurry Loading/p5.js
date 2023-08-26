percent = document.getElementById("perc");

function updated() {
    percent.innerHTML = ++upto + "%";
    if (upto === 100) {
        clearInterval(counts);
    }
}

let counts = setInterval(updated,40);
let upto = 0;