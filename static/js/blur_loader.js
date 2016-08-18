var video = document.getElementById('background');
video.addEventListener('loadeddata', function() {
   // Video is loaded and can be played
   $("#filter_layer").delay(2500).fadeOut(4000, "easeInSine");
   $(".loader").css("display","block").fadeIn(4000, "easeInSine", function(){
   		$("#loader_inner").delay(4000).animate({width:"100%"}, 7000, "easeInSine", function(){
   			$(".loader").css("display","none");
   			$("#lower_hud").css("display", "block");
   			$("#date_and_time").css("display", "block");
   		});
   });
}, false);

$( document ).ready(function() {
   // Video is loaded and can be played
   $(function() {
       $({blurRadius: 20}).animate({blurRadius: 5}, {
           duration: 6500,
           easing: 'easeInExpo', // or "linear"
                            // use jQuery UI or Easing plugin for more options
           step: function() {
               console.log(this.blurRadius);
               $('#filter_layer').css({
                   "-webkit-filter": "blur("+this.blurRadius+"px) brightness(1.2)",
                   "filter": "blur("+this.blurRadius+"px) brightness(1.2)"
               });
           }
       });
   });
}, false);