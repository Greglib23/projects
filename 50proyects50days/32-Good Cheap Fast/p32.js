const buttons = document.querySelectorAll('.button-dot')

buttons[0].addEventListener('click', () => {
    if (buttons[0].classList == 'button-dot active') {
        buttons[0].classList.toggle('inactive')
    }
    if (buttons[0].classList == 'button-dot inactive') {
        buttons[0].classList.toggle('inactive')
    }
    buttons[0].classList.toggle('active')
    if (isActive(buttons[1]) && isActive(buttons[2])){
        buttons[2].classList.toggle('active')
        buttons[2].classList.toggle('inactive')
    }
})

buttons[1].addEventListener('click', () => {
    console.log(buttons[1])
    if (buttons[1].classList == 'button-dot active') {
        buttons[1].classList.toggle('inactive')
    }
    if (buttons[1].classList == 'button-dot inactive') {
        buttons[1].classList.toggle('inactive')
    }
    buttons[1].classList.toggle('active')
    if (isActive(buttons[0]) && isActive(buttons[2])){
        buttons[0].classList.toggle('active')
        buttons[0].classList.toggle('inactive')
    }
})

buttons[2].addEventListener('click', () => {
    if (buttons[2].classList == 'button-dot active') {
        buttons[2].classList.toggle('inactive')
    }
    if (buttons[2].classList == 'button-dot inactive') {
        buttons[2].classList.toggle('inactive')
    }
    buttons[2].classList.toggle('active')
    if (isActive(buttons[0]) && isActive(buttons[1])){
        buttons[1].classList.toggle('active')
        buttons[1].classList.toggle('inactive')
    }
})

function isActive(button) {
    if (button.classList == 'button-dot active') {
        return true
    } else { return false }
}
