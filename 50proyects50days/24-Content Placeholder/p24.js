lines = document.querySelectorAll('.line')
backImage = document.querySelector('.img')
h2 = document.querySelector('.h2')
span = document.querySelector('.span')
profpic = document.querySelector('.profile-pic')
profileName = document.querySelector('.name')
date = document.querySelector('.date')
img = []

preloadImages()

setTimeout(() => {
    lines.forEach(line => {
        line.remove()
    });
    backImage.style.backgroundImage = 'url("https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2102&amp;q=80")'
    h2.classList.toggle('normal')
    h2.innerHTML = "<h2>Lorem ipsum dolor sit amet</h2>"
    span.innerHTML = "<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis</span>"
    profpic.style.backgroundImage = 'url("https://randomuser.me/api/portraits/men/45.jpg")'
    profileName.classList.toggle('normal')
    profileName.innerHTML = 'John Doe'
    date.classList.toggle('normal')
    date.innerHTML = 'Oct 08, 2020'
}, 4000);

function preloadImages() {
    img[0] = new Image()
    img[0].src = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2102&amp;q=80'
    img[1] = new Image()
    img[1].src = 'https://randomuser.me/api/portraits/men/45.jpg'
}