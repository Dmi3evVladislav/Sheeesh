$(document).ready(function () {

    $('.primary-nav-triger').on('click', function() {
        $('.menu-icon').toggleClass('is-clicked');
        $('.primary-nav').toggleClass('is-visible');
        $('body').toggleClass('overflow-hidden')

    });

    $('.primary-nav').on('click', "a", function(event){
            event.preventDefault();
            $('.menu-icon').toggleClass('is-clicked');
            $('.primary-nav').toggleClass('is-visible');
            $('body').toggleClass('overflow-hidden');
            let id = $(this).attr('href');
            let top = $(id).offset().top -140;
            $('body,html').animate({scrollTop: top}, 1000)
        
    });


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    $(".bxslider").bxSlider({
        startSlide: 0,
        controls: true,
        pager: true, //точечки снизу
        speed: 500,
        easing: 'ease-out',
        mode: 'horizontal',
        auto: true,
        pause: 3000,
        autoHover: true,
        stopAutoOnClick: true,
        preventDefaultSwipeX: true,
        preventDefaultSwipeY: true,  
    });

    $('.flexslider').flexslider({
        animation: 'slide',
        directionNav: false,
        animationloop: false,
        itemWidth: 200,
        itemMargin: 25,
        touch: true,

    });
    $('.Desktop').css({
      'display': 'none'
    })

    } else { $(".bxslider").bxSlider({
        startSlide: 0,
        controls: true,
        pager: true, //точечки снизу
        speed: 500,
        easing: 'ease-out',
        mode: 'horizontal',
        auto: true,
        pause: 3000,
        autoHover: true,
        stopAutoOnClick: true,
        preventDefaultSwipeX: true,
        preventDefaultSwipeY: true,    
      });

      $('.flexslider').flexslider({
        animation: 'slide',
        directionNav: true,
        animationloop: false,
        itemWidth: 200,
        itemMargin: 25,
        touch: false,
      });
      $('.noDesktop').css({
        'display': 'none'
      });
    };

    $(function(){
        let filterList = {
            init: function() {
                $('.workportfolio').mixitup({
                    targetSelector: '.portfolioitem',
                    filterSelector: '.filter',
                    effects: ['fade'],
                    easing: 'snap',
                });
            },
        };
        filterList.init();
    });

    $(document).ready(function() {
        $("div.scrolldown").click(function () {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 300);
        return false;
        });
    });

    $('.accordion').accordion({
        defaultOpen:""
    });
    $(".bxslider_team").bxSlider({
        controls: false
    });
});

let photoshop2 = $(".photperc2").text();

$(".photoshop2").css({
    'width': photoshop2,
})

let illustr2 = $(".ilustrperc2").text();

$(".ilustr2").css({
    'width': illustr2,
})

let sketch2 = $(".sketchperc2").text();

$(".sketch2").css({
    'width': sketch2,
})

let af2 = $(".afteffperc2").text();

$(".afteff2").css({
    'width': af2,
})

console.log(navigator.userAgent);