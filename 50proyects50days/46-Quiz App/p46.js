const head = document.querySelector('.head')
const submit = document.querySelector('.foot')

let options = []
let count = 0
let answers = [0, 0, 0, 0]
let corrects = [4, 2, 1, 2]

submit.addEventListener('click', nextAsk)

collectOptions()
listenersOptions()

function collectOptions() {
    options = document.querySelectorAll('input')

}

function listenersOptions() {

    options.forEach(option => {
        option.addEventListener('input', uncheckOthers)
    });
}

function uncheckOthers() {
    for (let i = 0; i < 4; i++) {
        if (this !== options[i]) {
            options[i].checked = false
        }
    }
}

function nextAsk() {
    if (count < 4){
        for (let i = 0; i < 4; i++) {
            if (options[i].checked == true) {
                answers[count] = i + 1
            }
        }
    }
    count++
    if (count == 0) {
        head.innerHTML = `<h2>Which language runs in a web browser?</h2>
        <div class="options">
            <div class="option">
                <input type="checkbox">
                <div class="text">Java</div>
            </div>
            <div class="option">
                <input type="checkbox">
                <div class="text">C</div>
            </div>
            <div class="option">
                <input type="checkbox">
                <div class="text">Python</div>
            </div>
            <div class="option">
                <input type="checkbox">
                <div class="text">JavaScript</div>
            </div>
        </div>`
        collectOptions()
        listenersOptions()
    }
    if (count == 1) {
        head.innerHTML = `<h2>What does CSS stand for?</h2>
        <div class="options">
            <div class="option">
                <input type="checkbox">
                <div class="text">Central Style Sheets</div>
            </div>
            <div class="option">
                <input type="checkbox">
                <div class="text">Cascading Style Sheets</div>
            </div>
            <div class="option">
                <input type="checkbox">
                <div class="text">Cascading Simple Sheets</div>
            </div>
            <div class="option">
                <input type="checkbox">
                <div class="text">Cars SUVs Sailboats</div>
            </div>
        </div>`
        collectOptions()
        listenersOptions()
    }
    if (count == 2) {
        head.innerHTML = `<h2>What does HTML stand for?</h2>
        <div class="options">
            <div class="option">
                <input type="checkbox">
                <div class="text">Hypertext Markup Language</div>
            </div>
            <div class="option">
                <input type="checkbox">
                <div class="text">Hypertext Markdown Language</div>
            </div>
            <div class="option">
                <input type="checkbox">
                <div class="text">Hyperloop Machine Language</div>
            </div>
            <div class="option">
                <input type="checkbox">
                <div class="text">Helicopters Terminals Motorboats Lamborginis</div>
            </div>
        </div>`
        collectOptions()
        listenersOptions()
    }
    if (count == 3) {
        head.innerHTML = `<h2>What year was JavaScript launched?</h2>
        <div class="options">
            <div class="option">
                <input type="checkbox">
                <div class="text">1996</div>
            </div>
            <div class="option">
                <input type="checkbox">
                <div class="text">1995</div>
            </div>
            <div class="option">
                <input type="checkbox">
                <div class="text">1994</div>
            </div>
            <div class="option">
                <input type="checkbox">
                <div class="text">none of the above</div>
            </div>
        </div>`
        collectOptions()
        listenersOptions()
    }
    if (count == 4){
        let score = 0
        for (let i = 0; i < 4; i++) {
            if (answers[i] == corrects[i]){
                score++
            }            
        }
        head.innerHTML = `<h2>You answered ${score}/4 questions correctly</h2>`
        count = -1
    }
}