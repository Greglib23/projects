const button = document.getElementById("button");
const text = document.getElementById("text");
const url = new URL("https://icanhazdadjoke.com/");

button.addEventListener("click", function () { nextJoke() })

function nextJoke() {
    // newjoke = url.searchParams.get("subtitle");

    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'text/html'
        }
    })
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const htmlDocument = parser.parseFromString(data, 'text/html');
            const jokeDiv = htmlDocument.querySelector('.card-content p');
            const newjoke = jokeDiv.textContent;
            text.innerHTML = newjoke;
        });


    
}
nextJoke();