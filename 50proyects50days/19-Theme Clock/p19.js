const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const time = document.querySelector('.time')
const dayMonth = document.querySelector('.day-month')
const number = document.querySelector('.number')
const button = document.querySelector('.theme-button')

refresh()
let intervalId = setInterval(refresh, 1000)
button.addEventListener('click',function(){
    if (document.body.classList == 'dark'){
        button.innerHTML = 'Dark Mode'
    }else{
        button.innerHTML = 'Light Mode'
    }
    document.body.classList.toggle('dark')
    hour.classList.toggle('dark')
    minute.classList.toggle('dark')
    time.classList.toggle('dark')
    dayMonth.classList.toggle('dark')
    number.classList.toggle('dark')
    button.classList.toggle('dark')
})


function refresh() {
    let thisTime = new Date
    second.style.transform = `rotate(${thisTime.getSeconds() * 6 - 90}deg)`
    minute.style.transform = `rotate(${thisTime.getMinutes() * 6 - 90}deg)`
    hour.style.transform = `rotate(${(thisTime.getHours() * 30) - 90}deg)`
    time.innerHTML = `${lesserAm(thisTime.getHours())}:${completeMinute(thisTime.getMinutes())} ${amOrPm(thisTime.getHours())}`
    dayMonth.innerHTML = `${dayOfWeek(thisTime.getDay())}, ${monthOfYear(thisTime.getMonth())}`
    number.innerHTML = `${thisTime.getDate()}`
}

function amOrPm(hours) {
    if (hours >= 12) {
        return 'PM'
    } else {
        return 'AM'
    }
}

function lesserAm(hours) {
    if (hours >= 12) {
        return hours - 12
    } else {
        return hours
    }
}

function dayOfWeek(thistimedate) {
    switch (thistimedate) {
        case 7:
            return 'SUNDAY'
            break;
        case 1:
            return 'MONDAY'
            break;
        case 2:
            return 'TUESDAY'
            break;
        case 3:
            return 'WEDNESDAY'
            break;
        case 4:
            return 'THURSDAY'
            break;
        case 5:
            return 'FRIDAY'
            break;
        case 6:
            return 'SATURDAY'
            break;
        default:
            return 'CUALQUIERA'
            break;
    }
}

function monthOfYear(thistimemonth) {
    switch (thistimemonth) {
        case 0:
            return 'JAN'
            break;
        case 1:
            return 'FEB'
            break;
        case 2:
            return 'MAR'
            break;
        case 3:
            return 'APR'
            break;
        case 4:
            return 'MAY'
            break;
        case 5:
            return 'JUN'
            break;
        case 6:
            return 'JUL'
            break;
        case 7:
            return 'AUG'
            break;
        case 8:
            return 'SEP'
            break;
        case 9:
            return 'OCT'
            break;
        case 10:
            return 'NOV'
            break;
        case 11:
            return 'DEC'
            break;
    }
}

function completeMinute(thistimeminute) {
    if (thistimeminute < 10){
        return '0'+thistimeminute
    }else{
        return thistimeminute
    }
}