//This project made things difficult for me, cause i don't know that exist the event "drag" for eventlistener. When i see the proyect on
//Github, i recode all the project, bassed on this doc: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drag_event
//and, obviously, inspiring me on the original 
const item = document.querySelector('.item')
const boxes = document.querySelectorAll('.box')

item.addEventListener('dragstart', startDrag)
item.addEventListener('dragend', endDrag)

boxes.forEach(function(box){
    box.addEventListener('dragenter', enterDrag)
    box.addEventListener('dragleave', leaveDrag)
    box.addEventListener('drop', dropDrag)
    box.addEventListener('dragover', overDrag)
})

function startDrag(){
    setTimeout(() => this.className = 'invisible', 0)
    this.classList.add('draging')
}
function endDrag(){
    this.className = 'item'
    this.classList.remove('draging')
}
function enterDrag(){
    this.classList.add('selected')
}
function leaveDrag(){
    this.classList.remove('selected')
}
function dropDrag(event){
    this.className = 'box'
    this.append(item)
    event.preventDefault()
}
function overDrag(event){
    event.preventDefault()
}