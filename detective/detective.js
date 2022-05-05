$(document).ready(function() {
  setTimeout(function(){
      $('body').addClass('loaded');
  }, 6000);

});

$(document).ready(function() {
    var btn = $(".button");
    btn.click(function() {
      btn.toggleClass("paused");
      return false;
    });
  });
  var credits = document.querySelector('.wrapper')

  
  var video = document.querySelector('#video1');
  var btn = document.querySelector('.button');
  var width = window.innerWidth;
  var height = window.innerHeight;
  

//   setting the video width and height properties
video.style.width = width-5 + "px";
video.style.height = height-5+ "px";




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
     credits.style.display="block";
     btn.classList.remove("paused");
  });
  
  next.onclick= function(){
     location.href = "interrogation.html";
  };