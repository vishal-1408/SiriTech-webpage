AOS.init();

$(".hii").click(function(a){
  $(".lopster").slideToggle(500,function(){
    $("#vi").fadeToggle(300,function(){
       $("#vis").fadeToggle(400,function(){
           $("#vish").fadeToggle(500,function(){
               $("#visha").fadeToggle(600);
           });
       });
    });
    $("#zo").fadeToggle(300,function(){
       $("#zoe").fadeToggle(400)
    })
    $("#to").fadeToggle(300,function(){
       $("#tom").fadeToggle(400,function(){
          $("#tomm").fadeToggle(500,function(){
             $("#tommy").fadeToggle(600);
           });
       });
    });


  })
})


 var $animate1= $("#cont-2 .numh");
  var $animate2= $("#cont-2 .texth");
 var $windows=$(window);

  $windows.on("scroll",function(){
  $window_ht= $windows.outerHeight();
  $window_top= $windows.scrollTop();
  $window_bot=($window_top+$window_ht) ;

 $.each($animate1,function(){
   $elem=$(this);
   $elem_ht=$elem.outerHeight(true);
   $elem_top=$elem.offset().top;
   $elem_bot=($elem_ht+$elem_top);

   if($elem_top<=$window_bot && $elem_bot>=$window_top){
     $elem.slideDown(2000);
   }
 })

$.each($animate2,function(){
  $elem=$(this);
  $elem_ht=$elem.outerHeight(true );
  $elem_top=$elem.offset().top;
  $elem_bot=($elem_ht+$elem_top);
  if($elem_top<=$window_bot && $elem_bot>=$window_top){
    $elem.fadeIn(2000);
  }
})
})

$("#gall").click(function(){
  console.log("clicked");
  // $("#cont-3").fadeIn(1500);
  $("#cont-3").slideToggle(1500)
})

var $animate3= $(".laser");
 var $animate4= $(".equipments");

 $windows.on("scroll",function(){
 $window_ht= $windows.height();
 $window_top= $windows.scrollTop();
 $window_bot=($window_top+$window_ht) ;

$.each($animate3,function(){
  $elem=$(this);
  $elem_ht=$elem.innerHeight();
  $elem_top=$elem.offset().top;
  $elem_bot=($elem_ht+$elem_top);

  if($elem_top<=$window_bot && $elem_bot>=$window_top){
    $elem.addClass("slideleft");
    $animate4.delay(2000).fadeIn(1400);
  }
  if($elem_top>$window_bot || $elem_bot<$window_top){
  }
})
})
/*
var $animate5= $("#cont-5");
 var $animate6= $(".clientimgs");

 $windows.on("scroll",function(){
 $window_ht= $windows.height();
 $window_top= $windows.scrollTop();
 $window_bot=($window_top+$window_ht) ;

  $elem=$animate5
  $elem_ht=$elem.height();
  $elem_top=$elem.offset().top;
  $elem_bot=($elem_ht+$elem_top);

  if($elem_top<=$window_bot && $elem_bot>=$window_top){
     $animate6.fadeIn(1500);
  }
  if($elem_top>$window_bot || $elem_bot<$window_top){
     $animate6.fadeOut(500);
  }
})*/

 $window=$(window);
 $animate7=$(".textinfra");
 $animate8=$(".imp");

 $window.on("scroll",function(){
   $window_top=$window.scrollTop();
   $window_ht=$window.innerHeight();
   $window_bt=($window_ht+$window_top);

   $animate7_tp=$animate7.offset().top;
   $animate7_ht=$animate7.innerHeight();
   $animate7_bt=($animate7_ht+$animate7_tp);
   if($animate7_bt>=$window_top && $animate7_tp<=$window_bt){
     // $(".navbar").css("background","#f6eedf");
     // $(".nav-link,.navbar-brand").css("color","#d63447");
        $animate7.addClass("slideleft");
      $animate8.delay(2300).fadeIn(1400);
   }

   if($animate7_bt<$window_top ||  $animate7_tp>$window_bt){
     // $(".navbar").css("background","#d63447");
     // $(".nav-link,.navbar-brand").css("color","#f6eedf");
     $animate7.removeClass("slideleft");
     $animate8.css("display","none");

   }

 })

 $("input[type=\"email\"]").click(function(){
   $(".tar").slideDown(1000);
 })
 //
 // var $animate9= $("#cont-2");
 // var $windows=$(window);
 //
 //  $windows.on("scroll",function(){
 //  $window_ht= $windows.outerHeight();
 //  $window_top= $windows.scrollTop();
 //  $window_bot=($window_top+$window_ht) ;
 //
 //  $animate9_tp=$animate9.offset().top;
 //  $animate9_ht=$animate9.innerHeight();
 //  $animate9_bt=($animate9_ht+$animate9_tp);
 //  if($animate9_bt>=$window_top && $animate9_tp<=$window_bt){
 //     console.log("sdffsdfsdfdsf");
 //     $(".navbar").css("background","#f6eedf");
 //     $(".nav-link,.navbar-brand").css("color","#d63447");
 //   }

 // })

