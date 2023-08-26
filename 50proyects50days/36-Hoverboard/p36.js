const container = document.querySelector('.container')
const colors = ['red', 'blue', 'yellow', 'rgb(2, 221, 101)', 'orange', 'blueviolet']

for (let i = 0; i < 25; i++) {
    let newRow = document.createElement('div')
    newRow.classList.add('row')
    for (let j = 0; j < 20; j++) {
        newBox = document.createElement('div')
        newBox.classList.add('box')
        newBox.addEventListener('mouseover',changeColor)
        newBox.addEventListener('mouseout',defColor)
        newRow.appendChild(newBox)   
    }
    container.appendChild(newRow)
}

function changeColor(){
    this.style.transition = 'all 0s'
    color = colors[Math.floor(Math.random()*7)]
    this.style.background = `${color}`
    this.style.boxShadow = `0px 0px 10px 0px ${color}`
}
function defColor(){
    this.style.transition = 'all 1.5s ease-out'
    this.style.background = 'rgb(29, 29, 29)'
    this.style.boxShadow = `none`
}