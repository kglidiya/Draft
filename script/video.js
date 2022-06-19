//Slider
const itemsAll = document.querySelectorAll('.slider__item');
const sliderTrack = document.querySelector('.slider__track');
const btnNext = document.querySelector('.slider__button_next');
const btnPrev = document.querySelector('.slider__button_prev');
const videoMain = document.querySelector('.video');
const slidesToShow = 4;
let itemWidth = sliderTrack.clientWidth / slidesToShow;
position = 0;
let move;

function showNextSlide() {
    position -= itemWidth
    sliderTrack.style.transform = `translateX(${position}px)`;
    console.log(position)
    console.log(-itemWidth * 3)

}

function showPrevSlide() {

    position += itemWidth
    sliderTrack.style.transform = `translateX(${position}px)`;
    console.log(position)


}
let count = 0;
function showMainSlideForward() {
    count += 1;
    for (let i = 0; i < itemsAll.length; i++) {
       // console.log(count);
        videoMain.src = itemsAll[count].firstElementChild.href;
        //console.log(itemsAll[count].firstElementChild.href);
        videoMain.classList.add('video-main_fade-in');
        setTimeout(function () {
            videoMain.classList.remove('video-main_fade-in');
        }, 3000);
       // itemsAll[count].firstElementChild.style.transform = 'scale(1.1)';
        console.log(videoMain.classList)
    }
}

function showMainSlideBackwards() {
    count -= 1;
    for (let i = 0; i < itemsAll.length; i++) {
        videoMain.src = itemsAll[count].firstElementChild.href;
        console.log(count);
        videoMain.classList.add('video-main_fade-in');
       setTimeout(function () {
            videoMain.classList.remove('video-main_fade-in');
        }, 3000);
        //itemsAll[count].firstElementChild.style.transform = 'scale(1.1)';
        //console.log(itemsAll[count].firstElementChild.classList)
    }
}

btnNext.addEventListener('click', function () {
    showNextSlide();
    checkBtn();
    showMainSlideForward()
});
btnPrev.addEventListener('click', function () {
    showPrevSlide();
    checkBtn();
    showMainSlideBackwards();
});

checkBtn();

function checkBtn() {
    if (position === 0) {
        btnPrev.disabled = true;
    }
    if (position < 0) {
        btnPrev.disabled = false;
    }
    if (position === -(itemWidth * 3)) {
        btnNext.disabled = true;
    }
    else btnNext.disabled = false;

}

itemsAll.forEach(function (slide) {
    slide.addEventListener('click', openMainVideo);
})

let intervalId;
function openMainVideo(evt) {
    videoMain.src = evt.target.src;
    videoMain.classList.add('video-main_fade-in');
    setTimeout(function () {
        videoMain.classList.remove('video-main_fade-in');
    }, 2000)
    
    //console.log(evt.target);
    //console.log(videoMain);
}



function adjustWidth() {
    itemsAll.forEach(function (item) {
        item.style.width = `${(sliderTrack.clientWidth / slidesToShow) - 30}px`;
    });

    sliderTrack.style.transform = `translateX(0)`;
    //itemWidth = `${sliderTrack.clientWidth / slidesToShow}`;

}
adjustWidth();
window.addEventListener("resize", adjustWidth);