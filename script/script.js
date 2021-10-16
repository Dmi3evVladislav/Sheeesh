$(document).ready(function () {
    $(".bxslider").bxSlider({
       pager: true, //точечки снизу
       infiniteLoop: true,
       speed: 500,
       easing: 'ease-out',
       mode: 'horizontal',
       auto: true,
       pause: 3000
    });
});