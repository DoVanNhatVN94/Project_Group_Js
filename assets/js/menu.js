 /*---stickey menu---*/
 $(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
     $(".sticky-header").removeClass("sticky");
    }else{
     $(".sticky-header").addClass("sticky");
    }
});