const button = document.querySelector('.button-show')
const notBar = document.querySelector('.not-bar')
const nots = document.querySelectorAll('.not')
let colors = ['red', 'green', 'purple']
let numbers = ['One', 'Two', 'Three', 'Four']

button.addEventListener('click', newNot)

function newNot() {
    let not = document.createElement('div')
    let rand1 = Math.floor(Math.random() * (2 - 0 + 1))
    let rand2 = Math.floor(Math.random() * (3 - 0 + 1))
    not.classList.add('not')
    not.innerHTML = `Message ${numbers[rand2]}`
    not.style.color = colors[rand1]
    notBar.appendChild(not)
    setTimeout(async () => {
        const nots = document.querySelectorAll('.not')
        notBar.removeChild(nots[0])
    }, 2000)
}