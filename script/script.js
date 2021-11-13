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

let photpercent2 = $(".photperc2").text()
console.log(photpercent2)