const buttons = document.querySelectorAll('.butt-container');

buttons.forEach(butt => {
    butt.addEventListener('click',() => {
        butt.parentNode.parentNode.classList.toggle('active');
    })
})