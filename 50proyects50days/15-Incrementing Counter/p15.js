const counters = document.querySelectorAll('.counter');
let aux1 = 0;
let aux2 = 0;
let aux3 = 0;

let intervalId = setInterval(function(){
    if (aux1 >= 11940){
        clearInterval(intervalId);
    } 
    counters[0].innerHTML=aux1+60;
     aux1=aux1+60;
     counters[1].innerHTML=aux2+25;
     aux2=aux2+25;
     counters[2].innerHTML=Math.floor(aux3+7500/200);
     aux3=aux3+7500/200;
     

},10)