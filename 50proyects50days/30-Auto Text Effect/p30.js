let up = document.querySelector('.up')
let down = document.querySelector('.down')
const text = document.querySelector('.text')
const number = document.querySelector('.number')
const message = 'We Love Programming!'
let speed = 500
let count = 1

up.addEventListener('click', upSpeed)
down.addEventListener('click', downSpeed)

let intervalId = setInterval(whiteMessage,speed)

function upSpeed() {
    if (count < 10) {
        count++
        speed = speed / 1.3
        clearInterval(intervalId)
        intervalId = setInterval(whiteMessage,speed)
        number.innerHTML = `${count} <div class="buttons"><div class="up"></div><div class="down"></div></div>`
        up = document.querySelector('.up')
        down = document.querySelector('.down')
        up.addEventListener('click', upSpeed)
        down.addEventListener('click', downSpeed)
    }
}

function downSpeed() {
    if (count > 1) {
        count--
        speed = speed * 1.3
        clearInterval(intervalId)
        intervalId = setInterval(whiteMessage,speed)
        number.innerHTML = `${count} <div class="buttons"><div class="up"></div><div class="down"></div></div>`
        up = document.querySelector('.up')
        down = document.querySelector('.down')
        up.addEventListener('click', upSpeed)
        down.addEventListener('click', downSpeed)
    }
}

function whiteMessage(){
    // console.log(message.slice(0,5))
    if (text.textContent.length == 20){
        text.innerHTML = message[0]
    }else{
        text.innerHTML = message.slice(0,text.textContent.length+1)
    }
}