document.body.style.display = "none"

$(document).ready(function () {
    document.body.style.display = ""
});



$(document).ready(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    $(".bxslider").bxSlider({
        controls: false,
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
    })
    } else $(".bxslider").bxSlider({
        controls: true,
        infiniteLoop: true,
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
        animationloop: false,
        itemWidth: 200,
        itemMargin: 25,
        touch: true
    })
});



$(document).ready(function () {
    $(".bxslider_team").bxSlider({
        controls: false
    })
    let pagersteam = $(".bx-pager")
    $(".pagers").append(pagersteam)
});



$(document).ready(function () {
    console.log('Сайт загружен и готов к работе');
});

let photoshop2 = $(".photperc2").text();

$(".photoshop2").css({
    'width': photoshop2,
})

let illustr2 = $(".ilustrperc2").text();

$(".illustr2").css({
    'width': illustr2,
})

let sketch2 = $(".sketchperc2").text();

$(".sketch2").css({
    'width': sketch2,
})

let photoshop2 = $(".photperc2").text();

$(".photoshop2").css({
    'width': photoshop2,
})