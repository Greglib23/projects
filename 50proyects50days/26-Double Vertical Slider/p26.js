const rarrow = document.querySelector('#rarrow')
const larrow = document.querySelector('#larrow')
const lefts = document.querySelectorAll('.loption')
const rights = document.querySelectorAll('.roption')
let cont1 = 0
let cont2 = 3 

larrow.addEventListener('click', upDown)
rarrow.addEventListener('click', downUp)

function upDown(){  
    if (cont1 == 0){
        cont1 = 3
        cont2 = 0
    }else{
        cont1--
        cont2++
    }    
    lefts.forEach(left => {
        left.style.transform = `translateY(-${100*cont1}vh)`
    });
    rights.forEach(right => {
        right.style.transform = `translateY(-${100*cont2}vh)`
    });
}

function downUp(){
    if (cont2 == 0){
        cont1 = 0
        cont2 = 3        
    }else{
        cont1++
        cont2--        
    }    
    lefts.forEach(left => {
        left.style.transform = `translateY(-${100*cont1}vh)`
    });
    rights.forEach(right => {
        right.style.transform = `translateY(-${100*cont2}vh)`
    });
}