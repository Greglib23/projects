const textarea = document.querySelector('.live-text');
const result = document.querySelector('.choises');
const container = document.querySelector('.container')
var randompick = document.createElement('div');
//external functions
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getRandomInt(max) {
    console.log(Math.floor(Math.random() * max))
    return Math.floor(Math.random() * max);
}

textarea.addEventListener('keypress', function (enter) {

    if (enter.key === 'Enter') {
        randompick.style.display = "flex"
        randompick.innerHTML = document.querySelector('.choises').outerHTML;
        setTimeout(() => {
            textarea.value = "";
        }, 1);

        container.appendChild(randompick);
        result.style.display = 'none';

        let count = 0;
        let intervalId = setInterval(function () {
            count++;
            var rnm = getRandomInt(randompick.firstChild.childElementCount);
            randompick.firstChild.childNodes[rnm].classList.toggle('active');
            if (count == 20) {
                clearInterval(intervalId);
            } else {
                let timeOut1 = setTimeout(function () {
                    randompick.firstChild.childNodes[rnm].classList.toggle('active');
                    clearTimeout(timeOut1);
                }, 100)
            }
        }, 200);
    } else {
        result.style.display = 'flex';
        randompick.style.display = 'none';
        var choises = []
        setTimeout(() => {
            choises = textarea.value.split(',');
            console.log(choises);
            result.innerHTML = "";
            choises.forEach(choise => {
                if (choise != "") {
                    var indivspan = document.createElement('span');
                    indivspan.innerHTML = choise;
                    result.appendChild(indivspan);
                }
            });
        }, 10);



    }

})