AOS.init();

$(".hii").click(function(a){
  $(".container-fluid").slideToggle(500,function(){
    $("#vi").fadeToggle(300,function(){
       $("#vis").fadeToggle(300,function(){
           $("#vish").fadeToggle(300,function(){
               $("#visha").fadeToggle(300);
           });
       });
    });
    $("#zo").fadeToggle(300,function(){
       $("#zoe").fadeToggle(300)
    })
    $("#to").fadeToggle(300,function(){
       $("#tom").fadeToggle(300,function(){
          $("#tomm").fadeToggle(300,function(){
             $("#tommy").fadeToggle(300);
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
    $animate4.delay(1500).fadeIn(1400);
  }
  if($elem_top>$window_bot || $elem_bot<$window_top){
    $elem.removeClass("slideleft");
    $animate4.css("display","none");
  }
})
})

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
     $animate6.slideDown(1500);
  }
  if($elem_top>$window_bot || $elem_bot<$window_top){
     $animate6.slideUp(500);
  }
})

 // $window=$(window);
 // $animate7=$(".textinfra");
 // $animate8=$(".imp");
 //
 // $window.on("scroll",function(){
 //   $window_top=$window.scrollTop();
 //   $window_ht=$window.height();
 //   $window_bt=($window_ht+$window_top);
 //
 //   $animate7_tp=$animate7.offset().top;
 //   $animate7_ht=$animate7.outerHeight();
 //   $animate7_bt=($animate7_ht+$animate7_tp);
 //   if($animate7_bt>=$window_top && $animate7_tp<=$window_bt){
 //      $animate8.fadeIn(1000);
 //      console.log("fdsfsd");
 //      $animate7.addClass("right");
 //
 //
 //   }
 //
 //   if($animate7_bt<$window_top ||  $animate7_tp>$window_bt){
 //     console.log("omg")
 //   }
 //
 // })
