const content = document.querySelector('.content')
const api = `https://source.unsplash.com/random/?`


fillContent()

async function createBox(count) {
    newBox = document.createElement('div')
    newBox.classList.add('box')
    newBox.innerHTML = `<img src="${api + count.toString()}" alt="random-image" draggable="false">`
    newBox.addEventListener('click', zoomIn)
    content.appendChild(newBox)
}

function fillContent() {
    for (let i = 0; i < 15; i++) {
        createBox(i)
    }
}
function zoomIn() {
    if (this.classList.value === 'box') {
        newAux = document.createElement('div')
        newAux.classList.add('aux')
        content.insertBefore(newAux, this)
        this.classList.toggle('open')
        this.style.position = 'absolute'
        boxes = document.querySelectorAll('.box')
        boxes.forEach(box => {
            box.removeEventListener('click', zoomIn)
            if (box !== this) {
                box.classList.add('blur')
            }
        });
        this.addEventListener('click', zoomIn)

    } else {

        this.classList.toggle('open')
        this.style.position = 'absolute'
        this.style.position = 'inherit'
        document.querySelector('.aux').remove()
        boxes = document.querySelectorAll('.box')
        boxes.forEach(box => {
            box.addEventListener('click', zoomIn)
            if (box !== this) {
                box.classList.remove('blur')
            }
        });
    }

}