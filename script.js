$(document).ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 9000);

});



$(document).ready(function() {
  var btn = $(".button");
  btn.click(function() {
    btn.toggleClass("paused");
    return false;
  });
});


var video = document.querySelector('#video1');
var btn = document.querySelector('.button');

btn.addEventListener('click', function(){
  if (video.paused) {
      video.play();
      }
  else  {
      video.pause();
      }
})

var next = document.querySelector('.next');
video.addEventListener("ended", function() {
   next.style.display = "flex";
   btn.classList.remove("paused");
});

next.onclick= function(){
   location.href = "interrogation.html";
};
