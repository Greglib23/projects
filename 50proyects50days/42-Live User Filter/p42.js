const bottom = document.querySelector('.bottom')
const input = document.querySelector('input')
let data = []

input.addEventListener('input', reloadCards)

fetch(`https://randomuser.me/api/?results=50`)
    .then(response => response.json())
    .then(aux => {
        data = aux
        fillProfile(data)
    })
    .catch(error => {
        console.log('No se encontró el Usuario');
    });

function fillProfile(data) {
    for (let i = 0; i < 50; i++) {
        createCard(i)
    }
}

function createCard(i) {
    let newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerHTML = `<div class="pic" style="background-image: url(${data.results[i].picture.thumbnail})"></div>
    <div class="info">
        <div class="name">${data.results[i].name.first} ${data.results[i].name.last}</div>
        <div class="ubication">${data.results[i].location.state}, ${data.results[i].location.country}</div>
    </div>`
    bottom.appendChild(newCard)
}

function reloadCards() {
    bottom.innerHTML = ''
    text = input.value.normalize("NFD").toLocaleLowerCase()
    if (text == ''){
        fillProfile(data)
    }
    for (let i = 0; i < 50; i++) {
        
        text2 = data.results[i].name.first.normalize("NFD").toLocaleLowerCase().slice(0, text.length)
        text3 = data.results[i].location.state.normalize("NFD").toLocaleLowerCase().slice(0, text.length)
        text4 = data.results[i].location.country.normalize("NFD").toLocaleLowerCase().slice(0, text.length)
        text5 = data.results[i].name.last.normalize("NFD").toLocaleLowerCase().slice(0, text.length)
        text6 = (data.results[i].name.first.normalize("NFD").toLocaleLowerCase() + ' ' + data.results[i].name.last.normalize("NFD").toLocaleLowerCase()).slice(0, text.length)
        if (text != '') {
            if (text === text2 || text === text3 || text === text4 || text === text5 || text === text6)
                createCard(i)
        }
    }


}