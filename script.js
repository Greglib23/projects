const animation = document.querySelector('.animation')
const navOptions = document.querySelectorAll('.option-a')
const firsts = document.querySelectorAll('.first')
const seconds = document.querySelectorAll('.second')
const thirds = document.querySelectorAll('.third')
const category = document.querySelector('.category-img')
const proyect = document.querySelector('.proyect')
const fiftyDays = document.querySelector('.fifty-days')
const proyCont = document.querySelector('.proyects-container')
const button = document.querySelector('#button-all-proy')
const boxes = document.querySelectorAll('.boxes')
const rainCont = document.querySelector('.rain-animation')
const deactAnimation = document.querySelector('.deact-animation')
const mail = document.querySelector('.contact-opt small')
const coppied = document.querySelector('.coppied')
const mediaQuery = window.matchMedia('(max-width: 768px)');
const menuNav = document.querySelector('.circle')
const container = document.querySelector('.container')
var viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
let pos = 1
let selectedProyectsThumbs = ['17', '19', '22', '28', '33', '37', '40', '42', '47', '50']
let validColor = ['#292e3d', '#494f64', '#6a7086', '#999fb4', '#ffffff']
let idIntRain
let flag = false

changeContent()
preloadImages()
asignBackgrounds()
checkAnimation()
idTime = setTimeout(() => {
    document.body.style.backgroundColor = 'rgb(19, 22, 31)'
    animation.remove()
    clearTimeout(idTime)
}, 2500);

navOptions.forEach(option => {
    option.addEventListener('click', reloadPos)
});
category.addEventListener('click', openProyects)
deactAnimation.addEventListener('click', () => {
    if (deactAnimation.classList.value === 'deact-animation hide') {
        deactAnimation.classList.toggle('hide')
        startRain()
    } else {
        deactAnimation.classList.toggle('hide')
        clearInterval(idIntRain)
        document.body.style.zIndex = '-5'
    }

})

fiftyDays.addEventListener('click', () => {
    if (proyCont.clientHeight == '0') {
        proyCont.style.width = '70vw'
        proyCont.style.maxHeight = 'calc(100vh - 24rem)'
        category.removeEventListener('click', openProyects)
        proyCont.childNodes[1].style.opacity = '1'
        proyCont.childNodes[7].style.opacity = '1'
        timeId = setTimeout(() => {
            boxes[0].style.opacity = '1'
            boxes[1].style.opacity = '1'
            clearTimeout(timeId)
        }, 1000);
    } else {
        proyCont.style.width = '0rem'
        proyCont.style.maxHeight = '0rem'
        category.addEventListener('click', openProyects)
        proyCont.childNodes[1].style.opacity = '0'
        proyCont.childNodes[7].style.opacity = '0'
        boxes[0].style.opacity = '0'
        boxes[1].style.opacity = '0'
    }
})
button.addEventListener('click', () => {
    if (parseInt(boxes[0].clientHeight) > 0) {
        boxes[0].style.maxHeight = '0'
        boxes[0].style.width = '0'
        boxes[0].style.opacity = '0'
        boxes[1].style.opacity = '0'
        proyCont.childNodes[1].style.opacity = '0'
        proyCont.childNodes[7].style.opacity = '0'
        proyCont.style.width = '0rem'
        proyCont.style.maxHeight = '0rem'
        timeId = setTimeout(() => {
            boxes[0].style.display = 'none'
            boxes[1].style.display = 'flex'
            button.textContent = 'Mostrar solo los destacados'
            boxes[1].style.maxHeight = '30rem'
            boxes[1].style.width = 'calc(100% - .25rem)'
            button.style.width = '100%'
            clearTimeout(timeId)
        }, 500);
        timeId2 = setTimeout(() => {
            proyCont.childNodes[1].textContent = 'Todos los proyectos'
            proyCont.style.width = '70vw'
            proyCont.style.maxHeight = 'calc(100vh - 24rem)'
            clearTimeout(timeId6)
            clearTimeout(timeId2)
        }, 1000);
        timeId3 = setTimeout(() => {
            boxes[1].style.opacity = '1'
            proyCont.childNodes[1].style.opacity = '1'
            proyCont.childNodes[7].style.opacity = '1'
            clearTimeout(timeId3)
        }, 2000);
    } else {
        boxes[1].style.maxHeight = '0'
        boxes[1].style.width = '0'
        boxes[0].style.opacity = '0'
        boxes[1].style.opacity = '0'
        proyCont.childNodes[1].style.opacity = '0'
        proyCont.childNodes[7].style.opacity = '0'
        proyCont.style.width = '0rem'
        proyCont.style.maxHeight = '0rem'
        timeId4 = setTimeout(() => {
            boxes[1].style.display = 'none'
            boxes[0].style.display = 'flex'
            button.textContent = 'Todos los proyectos de esta categoría'
            boxes[0].style.maxHeight = '30rem'
            boxes[0].style.width = 'calc(100% - .25rem)'
            button.style.width = '100%'
            clearTimeout(timeId4)
        }, 500);
        timeId5 = setTimeout(() => {
            proyCont.childNodes[1].textContent = 'Los proyectos mas destacados'
            proyCont.style.width = '70vw'
            proyCont.style.maxHeight = 'calc(100vh - 24rem)'
            clearTimeout(timeId3)
            clearTimeout(timeId5)
        }, 1000);
        timeId6 = setTimeout(() => {
            boxes[0].style.opacity = '1'
            proyCont.childNodes[1].style.opacity = '1'
            proyCont.childNodes[7].style.opacity = '1'
            clearTimeout(timeId6)
        }, 2000);
    }
})
mail.addEventListener('click', () => {
    if (flag == false) {
        flag = true
        coppied.classList.add('animated')
        const textoACopiar = "cristianiasias@outlook.com.ar"
        const elementoTemporal = document.createElement('textarea')
        elementoTemporal.value = textoACopiar
        document.body.appendChild(elementoTemporal);
        elementoTemporal.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('No se pudo copiar el texto: ', err);
        }
        document.body.removeChild(elementoTemporal);
        let timeFlag = setTimeout(() => {
            coppied.classList.remove('animated')
            flag = false
            clearTimeout(timeFlag)
        }, 2000);
    }
})
menuNav.addEventListener('click', () => {
    if (mediaQuery.matches) {
        navOptions[0].parentElement.parentElement.classList.toggle('active')
        menuNav.parentElement.classList.toggle('active')
    }
})

window.onresize = checkAnimation


function reloadPos() {
    for (let i = 0; i < 3; i++) {
        if (this === navOptions[i]) {
            if (pos != i + 1) {
                if (mediaQuery.matches) {
                    navOptions[0].parentElement.parentElement.classList.remove('active')
                    menuNav.parentElement.classList.toggle('active')
                    if (i == 0) {
                        container.classList.value = 'container first'
                    }
                    if (i == 1) {
                        container.classList.value = 'container second'
                    }
                    if (i == 2) {
                        container.classList.value = 'container third'
                    }
                }
                navOptions.forEach(element => {
                    element.classList.remove('active')
                });
                navOptions[i].classList.add('active')
                pos = i + 1
                changeContent()
                navOptions.forEach(option => {
                    option.removeEventListener('click', reloadPos)
                });
                let idTimeNav
                clearTimeout(idTimeNav)
                navOptions[0].parentElement.parentElement.classList.add('animated')
                document.querySelector('footer').classList.add('animated')
                idTimeNav = setTimeout(() => {
                    navOptions[0].parentElement.parentElement.classList.remove('animated')
                    document.querySelector('footer').classList.remove('animated')
                    navOptions.forEach(option => {
                        option.addEventListener('click', reloadPos)
                    });
                    clearTimeout(idTimeNav)
                }, 1000);


            }
        }
    }

}

function changeContent() {
    if (pos == 1) {
        togglePos2()
        togglePos3()
        timeId = setTimeout(() => {
            togglePos1()
            clearTimeout(timeId)
        }, 500);
    }
    if (pos == 2) {
        togglePos1()
        togglePos3()
        timeId2 = setTimeout(() => {
            togglePos2()
            clearTimeout(timeId2)
        }, 500);
    }
    if (pos == 3) {
        togglePos1()
        togglePos2()
        timeId3 = setTimeout(() => {
            togglePos3()
            clearTimeout(timeId3)
        }, 500);
    }
}
function togglePos1() {
    if (pos == 1) {
        firsts.forEach(element => {
            element.classList.remove('hide')
        });
    } else {
        firsts.forEach(element => {
            element.classList.add('hide')
        });

    }
}
function togglePos2() {
    if (pos == 2) {
        seconds.forEach(element => {
            element.classList.remove('hide')
        });
    } else {
        seconds.forEach(element => {
            element.classList.add('hide')
        });
    }
}
function togglePos3() {
    if (pos == 3) {
        thirds.forEach(element => {
            element.classList.remove('hide')
        });
    } else {
        thirds.forEach(element => {
            element.classList.add('hide')
        });
    }
}

function openProyects() {
    if (proyect.clientHeight == '0') {
        proyect.style.height = `39px`
        category.style.height = '5rem'
    } else {
        proyect.style.height = `0`
        category.style.height = '10rem'
    }
    if (proyect.clientWidth == '0') {
        proyect.style.width = `338px`
    } else {
        proyect.style.width = `0`
    }
}
function preloadImages() {
    for (let i = 1; i < 51; i++) {
        const img = new Image()
        img.src = `images/50proyectsthumbnails/${i}.png`
    }
}
function asignBackgrounds() {
    let boxes = document.querySelectorAll('.proyect-box.salient')
    for (let i = 0; i < 10; i++) {
        if (boxes[i].classList.value === 'proyect-box salient') {
            boxes[i].style.backgroundImage = `url(images/50proyectsthumbnails/${selectedProyectsThumbs[i]}.png)`
        }

    }
    boxes = document.querySelectorAll('.boxes.all .proyect-box')
    for (let i = 0; i < 50; i++) {
        boxes[i].style.backgroundImage = `url(images/50proyectsthumbnails/${i + 1}.png)`
    }
}
function startRain() {
    idIntRain = setInterval(() => {
        createGout(0)
        createGout(1)
        createGout(2)
        createGout(3)
        createGout(4)
    }, 200);
}
function createGout(pos2) {
    let gout = document.createElement('div')
    gout.classList.add('gout')
    gout.innerHTML = '&#x30A2'
    gout.style.left = `${Math.floor(Math.random() * 97)}%`
    gout.style.color = validColor[pos2]
    gout.style.fontSize = `calc(.8rem * ${(pos2 + 1)})`
    gout.style.transition = `all ${10000 - pos2 * 1500}ms linear`
    rainCont.appendChild(gout)
    let previousRand = [0, 0]
    let idInt = setInterval(() => {
        gout.innerHTML = `${getLetter(previousRand)}`
    }, 250);
    let idTime = setTimeout(() => {
        gout.style.top = '110%'
        gout.style.transform = 'sacale(.5)'
        clearTimeout(idTime)
    }, 100);
    let idTime2 = setTimeout(() => {
        gout.remove()
        clearInterval(idInt)
        clearTimeout(idTime2)
    }, (10000 - pos2 * 1500));
}
function getLetter(previousRand) {
    let rand1 = Math.floor(Math.random() * 2)
    let rand2 = Math.floor((Math.random() * 5 + 1)) * 2
    if (rand1 == previousRand[0] && rand2 == previousRand[1]) {
        return getLetter(previousRand)
    } else {
        previousRand[0] = rand1
        previousRand[1] = rand2
        if (rand1 == 0) {
            rand1 = 4
        } else { rand1 = 'A' }
        if (rand2 == 10) {
            rand2 = 'A'
        }
        return `&#x30${rand1}${rand2}`
    }
}
function checkAnimation() {
    if (deactAnimation.classList.value != 'deact-animation hide') {
        if (mediaQuery.matches) {
            clearInterval(idIntRain)
        } else {
            clearInterval(idIntRain)
            startRain()
        }
    }

}