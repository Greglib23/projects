const triangle1 = document.querySelector('.triangle1')
const triangle2 = document.querySelector('.triangle2')
let deg1 = 0
let deg2 = 0

id1 = setInterval(rotate1,1000)
setTimeout(() => {
    id2 = setInterval(rotate2,1000)
},500)


function rotate1(){
    deg1 = deg1 + 180
    triangle1.style.transform = `rotate(${deg1}deg)`
    
}
function rotate2(){
    deg2 = deg2 + 180
    triangle2.style.transform = `rotate(${deg2}deg)`
}
