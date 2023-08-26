const img1 = 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80'
const img2 = 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1934&amp;q=80'
const img3 = 'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80'
const img4 = 'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2689&amp;q=80'
const img5 = 'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80'
const images = [img1, img2, img3, img4, img5]
let img = []
const centers = document.querySelectorAll('.center-img')
const left = document.querySelector('.left-butt')
const right = document.querySelector('.right-butt')
const background = document.querySelector('.background')
let pos = 0;

preloadImages()

centers[pos].classList.toggle('active');
background.style.backgroundImage = `url(${images[pos]})`
right.addEventListener('click', function () {
    if (pos != 4) {
        centers[pos].classList.remove('active')
        pos++;
        centers[pos].classList.add('active')
        background.style.backgroundImage = `url(${images[pos]})`
    } else {
        centers[pos].classList.remove('active')
        pos = 0;
        centers[pos].classList.add('active')
        background.style.backgroundImage = `url(${images[pos]})`
    }
})

left.addEventListener('click', function () {
    if (pos != 0) {
        centers[pos].classList.remove('active')
        pos--;
        centers[pos].classList.add('active')
        background.style.backgroundImage = `url(${images[pos]})`
    } else {
        centers[pos].classList.remove('active')
        pos = 4;
        centers[pos].classList.add('active')
        background.style.backgroundImage = `url(${images[pos]})`
    }
})

function preloadImages() {
    for (let i = 0; i < 5; i++) {
        img[i] = new Image();
        img[i].src = images[i];
    }

}