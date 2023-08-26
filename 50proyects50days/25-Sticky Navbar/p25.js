webPage = document.querySelector('.name')
options = document.querySelectorAll('.option')
navBar = document.querySelector('nav')
container = document.querySelector('.container')

window.addEventListener('scroll', changeNav)

function changeNav() {
    if (window.scrollY > 150) {
        webPage.classList.add = 'change'
        options.forEach(option => {
            if (option != option[0]){
                option.classList.add('change')
            }
        });
        navBar.classList.add('change')
    }else{
        webPage.classList.remove = 'change'
        options.forEach(option => {
            if (option != option[0]){
                option.classList.remove('change')
            }
        });
        navBar.classList.remove('change')
    }

}