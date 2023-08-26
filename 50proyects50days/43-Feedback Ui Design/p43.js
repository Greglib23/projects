const options = document.querySelectorAll('.option')
const send = document.querySelector('.butt-send')
const texts = document.querySelectorAll('.text')
const first = document.querySelector('.first')
const second = document.querySelector('.second')

options.forEach(option => {
    option.addEventListener('click',selectOption)
});
send.addEventListener('click',viewResult)

function selectOption(){
    options.forEach(option => {
        option.classList.remove('active')
    });
    this.classList.add('active')
}

function viewResult(){
    active = document.querySelector('.active').textContent
    texts[1].innerHTML = `Feedback: ${active}`
    first.classList.remove('visible')
    second.classList.add('visible')
}