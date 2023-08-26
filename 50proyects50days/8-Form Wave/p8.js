let emailLetters = document.querySelectorAll("#email-field span");
let passLetters = document.querySelectorAll("#pass-field span");
let emailInput = document.getElementById("email-input");
let passInput = document.getElementById("pass-input");
let logbut = document.getElementById("login");
function removemail(){
    
}
emailInput.addEventListener("focusin", function () {
    emailLetters.forEach(letter => {
        letter.classList.add("active")
    })
    emailInput.style.borderColor = "#9ec5db"
})
emailInput.addEventListener("focusout", function () {
    if (emailInput.value.length == 0) {
        emailLetters.forEach(letter => {
            letter.classList.remove("active")
        })
        emailInput.style.borderColor = "white"
    } 
})

passInput.addEventListener("focusin", function () {
    passLetters.forEach(letterp => {
        letterp.classList.add("active")
    })
    passInput.style.borderColor = "#9ec5db"
})
passInput.addEventListener("focusout", function () {
    if (passInput.value.length == 0) {
        passLetters.forEach(letterp => {
            letterp.classList.remove("active")
        })
        passInput.style.borderColor = "white"
    }
     
})