var initialtxt = document.getElementById('initial-text');
var container = document.getElementById('container');
var boxs = document.getElementsByClassName('box')
function onKeyDownHandler(event){
    initialtxt.style.display = "none";
    container.style.display = "flex";
    let key = []
    if (event.keyCode == 32){
        key = 'Space';
    }else{
        key = event.key;
    }
    const keycode = event.keyCode;    
    const code = event.code
    boxs[0].innerHTML = key;
    boxs[1].innerHTML = keycode;
    boxs[2].innerHTML = code;
}