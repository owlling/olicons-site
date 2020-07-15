/*-------------------------------------------------------------------------------
  owlling
  v1.0
  2020.05.06
-------------------------------------------------------------------------------*/

$(window).load(function() {
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

//toggle scroll menu
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    //adjust menu background
    if (window.innerWidth < 768) {
        $('.sticky-navigation').removeClass('sticky-top').addClass('fixed-top');
    } else {
        $('.sticky-navigation').removeClass('fixed-top').addClass('sticky-top');
    }

    // adjust scroll to top
    if (scroll >= 600) {
        $('.scroll-top').addClass('active');
    } else {
        $('.scroll-top').removeClass('active');
    }
    return false;
});

// scroll top top
$('.scroll-top').click(function() {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 300);
});



// copy

function copyVideoUrl(event){

    var value = $(event.target).closest("span").attr('value');
    var success;
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(value).select();
    try{
       success = document.execCommand("copy");
    }catch (e){
        succeed = false;
    }
    if(success){
        var $copySuccess = $("<div class='copy-tips'><div class='copy-tips-wrap'>👉 Copied to clipboard ！📋 Cmd “ V ”</div></div>");
        $("body").find(".copy-tips").remove().end().append($copySuccess);
        $(".copy-tips").fadeOut(2400);
    }

    $temp.remove();
}


//悬浮菜单

$(function () {
        var ie6 = document.all;
        var dv = $('#sec-menu'), st;
        dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离
        $(window).scroll(function () {
            st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
            if (st > parseInt(dv.attr('otop'))) {
                if (ie6) {//IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
                    dv.css({ position: 'absolute', top: st });
                }
                else if (dv.css('position') != 'fixed') dv.css({ 'position': 'fixed', top: 0 });
            } else if (dv.css('position') != 'static') dv.css({ 'position': 'static' });
        });
    });
