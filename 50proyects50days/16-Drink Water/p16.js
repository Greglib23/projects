const glasses = document.querySelectorAll('.glass');
const remained = document.querySelector('.remained');
const percentage = document.querySelector('.percentage')

glasses.forEach(glass => {
    glass.addEventListener('click', function () {
        let cont = 0;
        //iterations on every glass
        for (i = 0; i < 8; i++) {
            //if the glass on iteration equal to the glass of the nodelist glasses, change every prev glass to active, and every next glass to inactive
            if (glass == glasses[i]) {
                if (glasses[i].classList.value == 'glass active') {
                    for (j = 0; j < 8; j++) {
                        if (j < i) {
                            glasses[j].classList.add('active');
                        }
                        if (j == i) {
                            glasses[j].classList.remove('active');
                        }
                        if (j > i) {
                            glasses[j].classList.remove('active');
                        }
                    }
                } else {
                    for (j = 0; j < 8; j++) {
                        if (j < i) {
                            glasses[j].classList.add('active');
                        }
                        if (j == i) {
                            glasses[j].classList.add('active');
                        }
                        if (j > i) {
                            glasses[j].classList.remove('active');
                        }
                    }
                }
            }
        }
        glasses.forEach(glass2 => {
            if (glass2.classList.value == 'glass active') {
                cont++;
                // console.log(cont)
            };
        })
        if (cont == 0) {
            percentage.classList.remove('active');
            remained.style.height = '100%';
            remained.classList.add('active');
            remained.childNodes[1].textContent = (100-12.5*cont)/50+'L'
            percentage.style.height= '0%'
        }
        if (cont > 0 && cont < 8) {
            percentage.classList.add('active');
            remained.classList.add('active');
            percentage.style.height = cont*12.5+'%';
            remained.style.height = 100 - cont*12.5+'%';
            percentage.innerHTML = cont*12.5+'%';
            remained.childNodes[1].textContent = (100-12.5*cont)/50+'L';
        }
        if (cont == 8) {
            remained.classList.remove('active');
            percentage.classList.add('active');
            percentage.style.height = '100%'
            percentage.innerHTML = cont*12.5+'%'
            remained.style.height = '0%'
        }   
    })
});