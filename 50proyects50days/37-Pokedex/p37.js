const pokemons = document.querySelector('.pokemons')
let data
let colors = {
    'grass': 'green', 'fire': 'red', 'water': 'rgba(0, 204, 255, 0.75)', 'bug': 'orange', 'poison': 'darkgreen', 'electric': 'yellow', 'ground': 'brown', 
    'fighting': 'darkgrey', 'fairy': 'rgba(179, 255, 0, 0.75)', 'psychic': 'blueviolet',
    'rock': 'brown', 'ghost': 'darkslateblue', 'ice': 'lightblue', 'normal': 'white', 'dragon': 'rgb(253, 215, 0)'
}

getPokemons()



function fillProfile(data) {
    let name = data.name;
    name = name.charAt(0).toUpperCase() + name.slice(1)
    const typePok = data.types[0].type.name
    let id = data.id
    const profilePic = data.sprites.other.home.front_default
    if (id > 0 && id < 10) {
        aux = id.toString()
        id = '#00' + aux
    }
    if (id > 9 && id < 100) {
        id = '#0' + id
    }
    if (id > 99 && id < 1000) {
        id = '#' + id
    }

    let newPoke = document.createElement('div')
    newPoke.classList.add('pokemon')
    newPoke.onmouseover = () => { newPoke.style.boxShadow = `0px 0px 35px -10px ${colors[typePok]}` }
    newPoke.onmouseout = () => { newPoke.style.boxShadow = `0px 0px 35px -20px rgba(255,255,255,0.75)` }
    newPoke.innerHTML = `<div class="pic" style="background-image: url(${profilePic})"></div>
        <div class="id">${id}</div>
        <div class="name">${name}</div>
        <div class="type">Type: ${typePok}</div>`
    pokemons.appendChild(newPoke)
}

async function getPokemons() {
    for (let i = 1; i < 151; i++) {

        await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response => response.json())
            .then(data => {
                fillProfile(data)
            })
            .catch(error => {
                console.log('No se encontró el Pokémon.');
            });
    }
}