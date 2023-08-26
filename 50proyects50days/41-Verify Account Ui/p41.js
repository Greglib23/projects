const numbers = document.querySelectorAll('.number')
let flag = false

numbers.forEach(number => {
    number.addEventListener('keydown',backInput)    
    number.addEventListener('input', function () {
        if (flag){
            if (number.value.length > 0){
                number.style.border = 'solid lightblue 2px'
            }else{
                number.style.border = 'solid grey 1px;'
            }
            
            const currentDigits = number.value.length;
            const remainingDigits = 1 - currentDigits;
            if (remainingDigits <= 0) {
                number.value = number.value.slice(0, 1);
            }
            if (number !== numbers[5]){
                for (let i = 0; i < 5; i++) {
                    if (numbers[i] === number){
                        numbers[i+1].focus()
                        i=10
                    }
                }
            }
        }
    });
    
});


function backInput(event) {
    if (event.keyCode == 8){
        flag = false
        for (let i = 0; i < 6; i++) {
            if (numbers[i] === this){
                if (i>0){
                    numbers[i-1].focus()
                }
                numbers[i].style.border = 'solid grey 2px'
                numbers[i].value = ''
                i=10
            }           
        }
    }else {
        flag = true
    }
}