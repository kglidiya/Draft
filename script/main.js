const test = document.querySelector('#test');
const test2 = document.querySelector('#test2');
const background = document.querySelector('.video');
const overlay = document.querySelector('.overlay');

/*test.addEventListener('click', function() {
 background.classList.add('video_notes');
 overlay.classList.add('overlay_notes');
   if(background.classList.contains('video_keys')) {
     background.classList.remove('video_keys');
}
     if(overlay.classList.contains('overlay_keys')) {
        overlay.classList.remove('overlay_keys');
}

})*/

test2.addEventListener('click', function() {
    background.classList.add('video_keys');
    overlay.classList.add('overlay_keys');
   if(background.classList.contains('video_notes')) {
     background.classList.remove('video_notes');
}
  

  if(overlay.classList.contains('overlay_notes')) {
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

