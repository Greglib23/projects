const boxes = document.querySelector('.boxes')
const magic = document.querySelector('.magic')
let flag = true

magic.addEventListener('click', changePos)

createBoxes()
const boxConts = document.querySelectorAll('.box-cont')
changePos()

function changePos(){
    if (flag == true){
        for (let column = -2; column < 2; column++) {
            for (let row = -2; row < 2; row++) {
                boxConts[(column+2)*4+(row+2)].style.transform = `translateX(${row*4+2}rem) translateY(${column*4+2}rem) rotate(360deg)`           
            }        
        }
        flag = false
    }else{
        for (let column = -2; column < 2; column++) {
            for (let row = -2; row < 2; row++) {
                boxConts[(column+2)*4+(row+2)].style.transform = `translateX(0rem) translateY(0rem) rotate(0deg)`           
            }        
        }
        flag = true
    }
}

function createBoxes(){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let newBox = document.createElement('div')
            newBox.classList.add('box-cont')
            newBox.innerHTML = `<div class="yellow-geo"></div>
        <div class="orange-geo"></div>
        <div class="box"></div>`
            newBox.childNodes[4].style.backgroundPosition = `${j * -8}rem ${i * -8}rem`
            boxes.appendChild(newBox)
        }
    }
}