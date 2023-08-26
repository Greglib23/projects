const pic = document.querySelector('.image')
const spanText = document.querySelector('.text')
let count = 0

pic.addEventListener('dblclick', newHeart)

function newHeart(event){
    count++
    spanText.innerHTML = `You liked it ${count} times`
    heart = document.createElement('div')
    heart.classList.add('pop-heart')
    heart.style.left = `calc(${event.offsetX}px - 100px)`
    heart.style.top = `calc(${event.offsetY}px - 85px)`
    pic.appendChild(heart)
    setTimeout(() => {
        hearts = document.querySelectorAll('.pop-heart')
        pic.removeChild(hearts[0])
    },485)
}