// <!--/Animate-JS-->

$(window).on("scroll", function () {
    
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $("#icon-count2").removeClass("none");
        $("#icon-count2").addClass("block");
        $(".header_bottom").addClass("fixed");
        $(".header_bottom").addClass("animate__fadeInDownBig");
    } else {
        $(".header_bottom").removeClass("fixed");
        $(".header_bottom").removeClass("animate__fadeInDownBig");
        
        $("#icon-count2").removeClass("block");
        $("#icon-count2").addClass("none");
    }
});
$(window).on("scroll", function () {
    var scroll3 = $(window).scrollTop();
    if (scroll3 >= 300) {
        $(".big_sale").addClass("animate__fadeInLeft");
        $(".top_product").addClass("animate__fadeInRight");
    }
});



