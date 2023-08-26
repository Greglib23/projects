const playButt = document.querySelector('.butt-play')
const container = document.querySelector('.container')
const insects = ["https://pngimg.com/uploads/fly/fly_PNG3946.png", "https://pngimg.com/uploads/mosquito/mosquito_PNG18175.png", "https://pngimg.com/uploads/spider/spider_PNG12.png", "https://pngimg.com/uploads/roach/roach_PNG12163.png"]
const choises = document.querySelectorAll('.choise')
const time = document.querySelector('.time')
const scoreDiv = document.querySelector('.score')
const ann = document.querySelector('.announcement')
let score = 0
let seconds = 0
let minutes = 0
let src = ''

playButt.addEventListener('click', moveOn)
choises.forEach(choise => {
    choise.addEventListener('click',startGame)
});

function moveOn() {
    container.style.top = '-100%'
}
function startGame(){
    src = this.childNodes[3].src
    container.style.top = '-200%'
    createNewInsect()
    intervalId = setInterval(() => {
        if(seconds < 10){
            time.innerHTML = `Time: ${minutes}:0${seconds}`
            seconds++
        }else if(seconds > 9 && seconds < 60){
            time.innerHTML = `Time: ${minutes}:${seconds}`
            seconds++
        }else if(seconds == 60){
            seconds = 0
            minutes++
            time.innerHTML = `Time: ${minutes}:0${seconds}`
            seconds++
        }
    },1000)

}

function createNewInsect(){

    let newInsect = document.createElement('img')
    newInsect.classList.add('insect')
    newInsect.setAttribute('alt', 'insect')
    newInsect.setAttribute('src',src)
    newInsect.setAttribute('draggable','false')
    newInsect.setAttribute('onclick',
    `createNewInsect()
    setScore()
    this.style.transform = 'scale(0.1) rotate(720deg)'
    this.style.opacity = '0'
    idTimeOut2 = setTimeout(() =>{
        createNewInsect('c')
        clearTimeout(idTimeOut2)
        this.remove()
    },800)    
    `)
    newInsect.style.left = `calc(${Math.floor(Math.random()*80+10)}% - 4rem)`
    newInsect.style.top = `calc(${Math.floor(Math.random()*80+10)}% - 4rem)`
    newInsect.style.transform = `rotate(${Math.floor(Math.random()*360)}deg)`
    let idTimeOut = setTimeout(() => {
        document.body.appendChild(newInsect)
        clearTimeout(idTimeOut)
    }, 500);
}
function setScore(){
    score++
    scoreDiv.innerHTML = `Score: ${score}`
    if (score == 20){
        ann.style.top = '30%'
    }
}