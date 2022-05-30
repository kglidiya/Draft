const test = document.querySelector('#test');
const test2 = document.querySelector('#test2');
const background = document.querySelector('.video');
const overlay = document.querySelector('.overlay');

test.addEventListener('click', function() {
 background.classList.add('video_notes');
   if(background.classList.containes('video_keys')) {
     background.classList.remove('video_keys');
}
     if(background.classList.containes('overlay_keys')) {
     background.classList.remove('overlay_keys');
}
 background.classList.add('overlay_notes');
})

test2.addEventListener('click', function() {
    background.classList.add('video_keys');
   if(background.classList.containes('video_notes')) {
     background.classList.remove('video_notes');
}
  
    overlay.classList.add('overlay_keys');

  if(background.classList.containes('overlay_notes')) {
     overlay.classList.remove('overlay_notes');
}

})
   
const height = document.documentElement.clientHeight;
const video = document.querySelector('.video')
//console.log(height)
//console.log(video.getBoundingClientRect().top)

window.addEventListener('scroll', function () {
    //console.log(video.getBoundingClientRect().top)
       let offset = video.getBoundingClientRect().top
       //console.log(offset)
     // console.log(height)
      if (offset <= 0) {
        opacity = 1;
    } else if (offset > 0 ) {
        opacity = (height/(offset+100)) / 10;
    }
   
       // console.log(opacity)
        video.style.opacity = opacity
        
    })

    let sliderPosition = 0; // начальная позиция дорожки
    const slidesToShow = 1;
    const slidesToScroll = 2;
    const sliderContainer = document.querySelector('.slider-wrapper')
    const sliderTrack = document.querySelector('.slider-track')
    const sliderItem = document.querySelector('.slider-item')
    const allItems = document.querySelectorAll('.slider-item')
    const itemCount = allItems.length
    const sliderItemWidth = sliderTrack.clientWidth / slidesToShow;
    const sliderContainerWidth = sliderContainer.width;
    const movePosition = slidesToScroll * sliderItemWidth;
    const popup = document.querySelector('.popup');
    const popupCloseBtn = document.querySelector('.popup__button');
    const popupImage = document.querySelector('.popup__image')
   
    // ширина дорожки определяется как разница между шириной всех картинок и шириной контейнера
    // разница нужна для того, чтобы прокрутка не проводилась дальше последнего фото
   // const sliderTrackWidth = allItems.length * sliderItemWidth - sliderContainerWidth; 
    //console.log(sliderTrackWidth)
   const sliderButtonPrev = document.querySelector('.prev')
   const sliderButtonNext = document.querySelector('.next')

 
    allItems.forEach(function (item) {
    
       item.style.width = `${sliderItemWidth}px`;
    }) 

  

    

sliderButtonNext.addEventListener('click', function(){
   sliderPosition -= movePosition;
    sliderTrack.style.transform = `translateX(${sliderPosition}px`;
    
    checkBtn()
});

sliderButtonPrev.addEventListener('click', function(){
    sliderPosition += movePosition;
    sliderTrack.style.transform = `translateX(${sliderPosition}px`;
   checkBtn()
 
});

const checkBtn = function() {
 
    if (sliderPosition === 0) {
        sliderButtonPrev.disabled = true;
    } else if (sliderPosition < 0) {
        sliderButtonPrev.disabled = false;
    }

   if(sliderPosition === -((itemCount - slidesToShow) * sliderItemWidth)) {
        sliderButtonNext.disabled = true;
    } else {
        sliderButtonNext.disabled = false;
    }
    
}

checkBtn()
//console.log(sliderPosition)

function openPopup(e) {
    popup.classList.add('popup_opended')
    popupImage.src = e.target.src
 

}

function closePopup() {
    popup.classList.remove('popup_opended')
    
}

allItems.forEach(function (item) {
    
    item.addEventListener('click', openPopup)
   // console.log(item.closest('image'))
  
    
})

popupCloseBtn.addEventListener('click', closePopup)

