//var video = document.querySelectorAll('.video-container video');

//video.forEach(play => play.addEventListener('click', () =>{
//  play.classList.toggle('active');
//  if(play.paused){
//    play.play();
//  } else {
//    play.pause();
//    play.currentTime = 0;
//  }
//}));

var video1 = document.querySelector('#video1');
var overlay1 = document.querySelector('#overlay1');

var video2 = document.querySelector('#video2');
var overlay2 = document.querySelector('#overlay2');

var video3 = document.querySelector('#video3');
var overlay3 = document.querySelector('#overlay3');

var video4 = document.querySelector('#video4');
var overlay4 = document.querySelector('#overlay4');


overlay1.addEventListener('click', function(){
  document.querySelector('.popup-video').style.display = 'block';
   document.querySelector('.popup-video video').src = video1.getAttribute('src');
})


overlay2.addEventListener('click', function(){
  document.querySelector('.popup-video').style.display = 'block';
   document.querySelector('.popup-video video').src = video2.getAttribute('src');
})

overlay3.addEventListener('click', function(){
  document.querySelector('.popup-video').style.display = 'block';
   document.querySelector('.popup-video video').src = video3.getAttribute('src');
})

overlay4.addEventListener('click', function(){
  document.querySelector('.popup-video').style.display = 'block';
   document.querySelector('.popup-video video').src = video4.getAttribute('src');
})


//document.querySelectorAll('.video-container .video-overlay').forEach(vid => {
//  vid.onclick = () =>{
//    document.querySelector('.popup-video').style.display = 'block';
//    document.querySelector('.popup-video video').src = video.getAttribute('src');
//  }
//});

//document.querySelector('.popup-video span').onclick() = () => {
//  document.querySelector('.container .popup-video').style.display = 'none';
//};

var closeVid = document.querySelector('.popup-video span');

closeVid.addEventListener('click', function(){
  document.querySelector('.popup-video').style.display = 'none';
})

var next = document.querySelector('.next');
$(document).ready(function() {
    setTimeout(function(){
        next.style.display = "flex";
    }, 50000);

});

next.onclick= function(){
   location.href = "detectiveBoard/index.html";
};
