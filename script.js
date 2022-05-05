//Pre-loader screen disappear after 9 s
$(document).ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 9000);

});


//Play/Pause button changing between displaying Play symbol and Pause symbol
$(document).ready(function() {
  var btn = $(".button");
  btn.click(function() {
    btn.toggleClass("paused");
    return false;
  });
});


var video = document.querySelector('#video1');
var btn = document.querySelector('.button');

//Play/Pause button playing and pausing the video
btn.addEventListener('click', function(){
  if (video.paused) {
      video.play();
      }
  else  {
      video.pause();
      }
})
//"Next" button appears after video is ended
var next = document.querySelector('.next');
video.addEventListener("ended", function() {
   next.style.display = "flex";
   btn.classList.remove("paused"); //When video ended, return to the Play symbol
});

next.onclick= function(){
   location.href = "interrogation.html";
};
