const bar = document.querySelector('.bar')
const number = document.querySelector('.number')


bar.addEventListener('input', moveBox)

function moveBox(){
    number.style.left = `calc(${bar.value*0.92}% - 2.2rem - 1px)`
    number.innerHTML = `${bar.value}`
}