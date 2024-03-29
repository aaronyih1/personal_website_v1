function firstTransition(){
  var count = 0;
  var video = document.getElementById('background');
  $("#typed-strings-2").css("display", "none");
  $( document ).ready(function() {
     $(function() {
         $({blurRadius: 45}).animate({blurRadius: 15}, {
             duration: 6500,
             easing: 'easeOutQuart', // or "linear"
                              // use jQuery UI or Easing plugin for more options
             step: function() {
                 // console.log(this.blurRadius);
                 $('#filter_layer').css({
                     "-webkit-filter": "blur("+this.blurRadius+"px) brightness(0.8)",
                     "filter": "blur("+this.blurRadius+"px) brightness(0.8)"
                 });
             }
         });
     });
  }, false);

  video.addEventListener('loadeddata', function() {
     // Video is loaded and can be played
     $("#filter_layer").delay(2500).fadeOut(4000, "easeInSine");

     $(".loader").css("display","block").fadeIn(4000, "easeInSine", function(){
          $("#loader_inner").delay(4000).animate({width:"100%"}, 7000, "easeInSine", function(){
          count++; //temporary fix
          if(count==1){
                  $(".loader").css("display","none");
                  $("#lower_hud").css("display", "block");
                  $("#date_and_time").css("display", "block");
                  // $("#hud_info").css("display", "inline-block")
                  $("#typed").css("display", "inline");
          
            $("#typed").typed({
              stringsElement: $('#typed-strings-1'),
              typeSpeed: 0,
              startDelay: 3000
            });
          }
          });
     });
  }, false);

}
function secondTransition(){
    var count = 0;
    var video = document.getElementById('background');
    $("#typed-strings-1").css("display", "none");
    $( document ).ready(function() {
       $(function() {
           $({blurRadius: 45}).animate({blurRadius: 15}, {
               duration: 6500,
               easing: 'easeOutQuart', // or "linear"
                                // use jQuery UI or Easing plugin for more options
               step: function() {
                   // console.log(this.blurRadius);
                   $('#filter_layer').css({
                       "-webkit-filter": "blur("+this.blurRadius+"px) brightness(0.8)",
                       "filter": "blur("+this.blurRadius+"px) brightness(0.8)"
                   });
               }
           });
       });
    }, false);

    video.addEventListener('loadeddata', function() {
       // Video is loaded and can be played
       $("#filter_layer").delay(2500).fadeOut(1000, "easeInSine");
       $("#lower_hud").css("display", "block");
       $("#date_and_time").css("display", "block");
             // $("#hud_info").css("display", "inline-block")
       $("#typed").css("display", "inline");
       
       $("#typed").typed({
         stringsElement: $('#typed-strings-2'),
         typeSpeed: 0,
         startDelay: 6500
       });
    }, false);
}
// var count = 0;
// var video = document.getElementById('background');
// $( document ).ready(function() {
//    $(function() {
//        $({blurRadius: 45}).animate({blurRadius: 15}, {
//            duration: 6500,
//            easing: 'easeOutQuart', // or "linear"
//                             // use jQuery UI or Easing plugin for more options
//            step: function() {
//                // console.log(this.blurRadius);
//                $('#filter_layer').css({
//                    "-webkit-filter": "blur("+this.blurRadius+"px) brightness(0.8)",
//                    "filter": "blur("+this.blurRadius+"px) brightness(0.8)"
//                });
//            }
//        });
//    });
// }, false);

// video.addEventListener('loadeddata', function() {
//    // Video is loaded and can be played
//    $("#filter_layer").delay(2500).fadeOut(4000, "easeInSine");

//    $(".loader").css("display","block").fadeIn(4000, "easeInSine", function(){
//    		$("#loader_inner").delay(4000).animate({width:"100%"}, 7000, "easeInSine", function(){
//         count++; //temporary fix
//         if(count==1){
//      			$(".loader").css("display","none");
//      			$("#lower_hud").css("display", "block");
//      			$("#date_and_time").css("display", "block");
//      			// $("#hud_info").css("display", "inline-block")
//      			$("#typed").css("display", "inline");
        
//           $("#typed").typed({
//             stringsElement: $('#typed-strings'),
//             typeSpeed: 0,
//             startDelay: 3000
//           });
//         }
//    		});
//    });
// }, false);