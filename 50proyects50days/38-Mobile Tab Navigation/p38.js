const options = document.querySelectorAll('.option')
const images = document.querySelectorAll('.image')

options.forEach(option => {
    option.addEventListener('click',changeState)
});

function changeState(){
    options.forEach(option2 => {
        option2.style.color = 'rgb(92, 92, 92)'
    });
    this.style.color = 'rgb(105, 39, 180)'
    for (let i = 0; i < 4; i++) {
        if (this === options[0]){
            images[0].style.opacity = '1'
            images[1].style.opacity = '0'
            images[2].style.opacity = '0'
            images[3].style.opacity = '0'
        }   
        if (this === options[1]){
            images[0].style.opacity = '0'
            images[1].style.opacity = '1'
            images[2].style.opacity = '0'
            images[3].style.opacity = '0'
        }     
        if (this === options[2]){
            images[0].style.opacity = '0'
            images[1].style.opacity = '0'
            images[2].style.opacity = '1'
            images[3].style.opacity = '0'
        }   
        if (this === options[3]){
            images[0].style.opacity = '0'
            images[1].style.opacity = '0'
            images[2].style.opacity = '0'
            images[3].style.opacity = '1'
        }     
    }
}