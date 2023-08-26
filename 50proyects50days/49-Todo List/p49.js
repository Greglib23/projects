const todos = document.querySelector('.todos')
const input = document.querySelector('input')

input.addEventListener('keypress',newToDo)

function newToDo(event){    
    if (event.keyCode === 13){
        let newTodo = document.createElement('div')
        newTodo.classList.add('todo')
        newTodo.setAttribute('onclick',"this.classList.toggle('lined')")
        newTodo.setAttribute('oncontextmenu',`event.preventDefault();this.remove()`)
        newTodo.innerHTML = `${input.value}`
        input.value = ''
        todos.appendChild(newTodo)
    }
}