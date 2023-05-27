let images = [
    "/images/img-1.jpeg",
    "/images/img-2.jpeg",
    "/images/img-3.jpeg",
];

let currentImage = 0; 
let sliderImage = document.querySelector(".slider__image");

let nextBtn = document.querySelector(".slider__button-next");
let prevBtn = document.querySelector(".slider__button-prev");
let playBtn = document.querySelector(".slider__button-play");

function nextImage(){
    if(currentImage < images.length - 1) {
        currentImage++;
    } else{
        currentImage = 0;
    }
    sliderImage.src = images[currentImage];
 
}

function prevImage(){
    if(currentImage > 0) {
        currentImage--;
    } else{
        currentImage = images.length - 1;
    }
    sliderImage.src = images[currentImage];
}

let interval;
function autoplay(){
    if(interval){
        clearInterval(interval);
        interval = null;
    } else{
        interval = setInterval(() => {
            nextImage();
        }, 1000);
    }
    playBtn.children[0].classList.toggle('fa-play');
    playBtn.children[0].classList.toggle('fa-pause');
}


nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);
playBtn.addEventListener('click', autoplay);