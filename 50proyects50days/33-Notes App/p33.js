const button = document.querySelector('.add-butt')
const notes = document.querySelector('.notes')

preloadImages()

button.addEventListener('click', addNote)

function addNote() {
    let newNote = document.createElement('div')
    newNote.classList.add('note')
    newNote.innerHTML = `<div class="note-bar">
    <span class="material-symbols-outlined edit" onclick="
        if (this.parentNode.parentNode.childNodes[2].readOnly == true){
            this.parentNode.parentNode.childNodes[2].readOnly = false
            this.style.background = '#698f35'
            this.parentNode.parentNode.classList.add('editing')
        }else{
        this.parentNode.parentNode.childNodes[2].readOnly = true
        this.style.background = 'transparent'
        this.parentNode.parentNode.classList.remove('editing')
        }
        ">edit_note</span>
    <span class="material-symbols-outlined delete" onclick="
    this.parentNode.parentNode.remove()
    ">delete</span>
</div>
<textarea class="text" cols="30" rows="10" readonly></textarea>`
    notes.appendChild(newNote)
}

function preloadImages(){
    let newDiv = document.createElement('span')
    newDiv.classList.add('material-symbols-outlined', 'edit')
    newDiv.textContent = 'edit_note'
    let newDiv2 = document.createElement('span')
    newDiv2.classList.add('material-symbols-outlined', 'delete')
    newDiv2.textContent = 'delete'
}