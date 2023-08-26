const password = document.querySelector('.password')
const copy = document.querySelector('.copy')
const lenght = document.querySelector('#number')
const upper = document.querySelector('#upper')
const lower = document.querySelector('#lower')
const numbers = document.querySelector('#numbers')
const symbols = document.querySelector('#symbols')
const genButt = document.querySelector('.gen-butt')
const coppied = document.querySelector('.coppied')
let arr = []
let finalPass = []

genButt.addEventListener('click', generate)
copy.addEventListener('click', () => {
    const range = document.createRange();
    range.selectNode(password);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    coppied.style.display = 'block'
    coppied.style.opacity = '1'
    let id = setTimeout(() => {
        coppied.style.display = 'none'
        coppied.style.opacity = '0'
        clearTimeout(id)
    },3000)
})

function generate() {
    arr = []
    if (upper.checked) {
        for (let i = 65; i < 91; i++) {
            arr = arr.concat(String.fromCharCode(i))
        }
    }
    if (lower.checked) {
        for (let i = 97; i < 123; i++) {
            arr = arr.concat(String.fromCharCode(i))
        }
    }
    if (numbers.checked) {
        for (let i = 0; i < 10; i++) {
            arr = arr.concat(i)
        }
    }
    if (symbols.checked) {
        for (let i = 33; i < 127; i++) {
            if (i == 48) {
                i = 58
            }
            if (i == 65) {
                i = 91
            }
            if (i == 97) {
                i = 123
            }
            arr = arr.concat(String.fromCharCode(i))
        }
    }
    if (arr.length > 0) {
        finalPass = []
        aux = []
        for (let i = 0; i < parseInt(lenght.value); i++) {
            finalPass = finalPass.concat(arr[Math.floor(Math.random() * (arr.length - 1))])
        }
        password.innerHTML = finalPass.join('')
    }
}