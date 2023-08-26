const images = document.querySelectorAll('.image')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let pos = 0

let idInterval = setInterval(moveOn,2000)
prev.addEventListener('click',moveLeft)
next.addEventListener('click',moveRight)

function moveOn(){
    pos++
    if (pos == 4){
        pos = 0
    }    
    for (let i = 0; i < 4; i++) {
        images[i].style.transform = `translateX(${(i-pos)*30}rem)`       
    }
}
function moveOff(){
    pos--
    if (pos == -1){
        pos = 3
    }    
    for (let i = 0; i < 4; i++) {
        images[i].style.transform = `translateX(${(i-pos)*30}rem)`       
    }
}
function moveRight(){
    clearInterval(idInterval)
    moveOn()
    idInterval = setInterval(moveOn,2000)
}
function moveLeft(){
    clearInterval(idInterval)
    moveOff()
    idInterval = setInterval(moveOn,2000)
}