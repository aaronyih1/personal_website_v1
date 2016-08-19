var video = document.getElementById('background');
video.addEventListener('loadeddata', function() {
   // Video is loaded and can be played
   $("#filter_layer").delay(2500).fadeOut(4000, "easeInSine");
   $(".loader").css("display","block").fadeIn(4000, "easeInSine", function(){
   		$("#loader_inner").delay(4000).animate({width:"100%"}, 7000, "easeInSine", function(){
   			$(".loader").css("display","none");
   			$("#lower_hud").css("display", "block");
   			$("#date_and_time").css("display", "block");
   			$("#typed-strings").css("display", "inline");
   			$("#typed").css("display", "inline");
   			$(function(){
   			    $("#typed").typed({
   			      stringsElement: $('#typed-strings'),
   			      typeSpeed: 0
   			    });
   			});
   		});
   });
}, false);

$( document ).ready(function() {
   // Video is loaded and can be played
   $(function() {
       $({blurRadius: 30}).animate({blurRadius: 15}, {
           duration: 6500,
           easing: 'easeOutQuart', // or "linear"
                            // use jQuery UI or Easing plugin for more options
           step: function() {
               // console.log(this.blurRadius);
               $('#filter_layer').css({
                   "-webkit-filter": "blur("+this.blurRadius+"px) brightness(1.2)",
                   "filter": "blur("+this.blurRadius+"px) brightness(1.2)"
               });
           }
       });
   });
}, false);