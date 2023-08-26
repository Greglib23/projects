imagesImg = document.querySelectorAll('img')
images = document.getElementsByClassName("image");
titles = document.getElementsByClassName("titles");

imagesImg[0].style.left = '0%'

function expand(exeption) {
    for (i = 0; i < 5; i++) {
        if (exeption !== i) {
            images[i].style.width = "7%";   
            imagesImg[i].style.left = '-50%'
            titles[i].style.display="none";                    
        }
    }
    images[exeption].style.width = '75%';
    console.log(imagesImg[i])
    imagesImg[exeption].style.left = '0%'
    titles[exeption].style.display="block";    
}

images[0].addEventListener("click", function(){expand(0)});
images[1].addEventListener("click", function(){expand(1)});
images[2].addEventListener("click", function(){expand(2)});
images[3].addEventListener("click", function(){expand(3)});
images[4].addEventListener("click", function(){expand(4)});



