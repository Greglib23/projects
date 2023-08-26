const pass = document.querySelector('.pass')
const backImage = document.querySelector('.back-image')
let count = 30
pass.addEventListener('keydown', unBlur)

function unBlur() {
    let timeId
    clearTimeout(timeId)
    timeId = setTimeout(() => {
        backImage.style.filter = `blur(${count - pass.value.length * 3}px)`
        clearTimeout(timeId)
        console.log(pass.value)
    }, 10);

}