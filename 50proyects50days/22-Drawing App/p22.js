//fonts: https://codepen.io/zsolt555/pen/rpPXOB

const paintCanvas = document.querySelector('.draw-area');
const deleteAll = document.querySelector('.delete')
const context = paintCanvas.getContext('2d');
const colorPicker = document.querySelector('.color');
context.lineCap = 'round';


resizeCanvas()
let size = 20

window.onresize = resizeCanvas



colorPicker.addEventListener('change', event => {
    context.strokeStyle = event.target.value
    context.fillStyle = event.target.value
});

const lineWidthLabel = document.querySelectorAll('.option');

lineWidthLabel[2].addEventListener('click', even =>{
    width = lineWidthLabel[1].textContent
    if(width < 10){
        width++
        size = width*2
        context.lineWidth = size;
    }    
    lineWidthLabel[1].innerHTML = width
})
lineWidthLabel[0].addEventListener('click', even =>{
    width = lineWidthLabel[1].textContent
    if(width > 1){
        width--
        size = width*2
        context.lineWidth = size;
    }    
    lineWidthLabel[1].innerHTML = width
})

let x = 0, y = 0;
let isMouseDown = false;

const stopDrawing = () => { isMouseDown = false; }
const startDrawing = event => {
    isMouseDown = true;
    [x, y] = [event.offsetX, event.offsetY];
}
const drawIn = event => {
    if (isMouseDown) {
        const newX = event.offsetX;
        const newY = event.offsetY;
        
        drawCircle(newX,newY)
        drawLine(x,y,newX,newY)
        
        //[x, y] = [newX, newY];
        x = newX;
        y = newY;
    }
}
function resizeCanvas(event){
    context.canvas.width = paintCanvas.offsetWidth;
    context.canvas.height = paintCanvas.offsetHeight;
    context.strokeStyle = colorPicker.value
    context.fillStyle = colorPicker.value
}

function drawCircle(x, y) {
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2)
    context.fill()
}
function drawLine(x1, y1, x2, y2) {
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.lineWidth = size * 2
    context.stroke()
}

paintCanvas.addEventListener('mousedown', startDrawing);
paintCanvas.addEventListener('mousemove', drawIn);
paintCanvas.addEventListener('mouseup', stopDrawing);
paintCanvas.addEventListener('mouseout', stopDrawing);
deleteAll.addEventListener('click', () => {
    resizeCanvas();
    
})