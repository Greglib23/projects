const button = document.querySelector('.button-violet')

button.addEventListener('click',clickButton)

function clickButton(event){
    let div = document.createElement('div')
    div.classList.add('circle')
    div.style.left = `calc(${event.offsetX}px - 5rem)`
    div.style.top = `calc(${event.offsetY}px - 5rem)`
    button.appendChild(div)
    timeId = setTimeout(function(){
        div.remove()
        
    },500)
    
    
}

