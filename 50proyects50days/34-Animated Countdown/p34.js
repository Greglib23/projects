const numbers = document.querySelector('.numbers')
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const replay = document.querySelector('.replay')
let count = 3

startInterval()

replay.addEventListener('click', doItAgain)

function doItAgain() {
    count = 3
    let removed = document.querySelectorAll('.number')
    removed.forEach(number => {
        number.remove()
    });
    first.style.display = 'flex'
    second.style.display = 'none'
    startInterval()
}

function startInterval() {
    let newNumber = document.createElement('div')
        newNumber.classList.add('number')
        newNumber.textContent = count
        count--
        numbers.appendChild(newNumber)
    idInterval = setInterval(() => {
        if (count == -1) {
            clearInterval(idInterval)
            first.style.display = 'none'
            second.style.display = 'block'
        }
        let newNumber = document.createElement('div')
        newNumber.classList.add('number')
        newNumber.textContent = count
        count--
        numbers.appendChild(newNumber)
    }, 1000)
}