var video = document.getElementById('background');
video.addEventListener('loadeddata', function() {
   // Video is loaded and can be played
   $("#filter_layer").delay(2500).fadeOut(4000, "easeInSine");
   $(".loader").css("display","block").fadeIn(4000, "easeInSine", function(){
   		$("#loader_inner").delay(4000).animate({width:"100%"}, 4000, "easeInSine");
   });
}, false);