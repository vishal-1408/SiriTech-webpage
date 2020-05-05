AOS.init();

$(".hii").click(function(a){
  console.log("hi");
  $(".container-fluid").slideToggle(500)


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
