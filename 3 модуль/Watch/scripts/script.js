let canvas = document.getElementById("watch");
let context = canvas.getContext("2d");

function draw_watch() {
    context.clearRect(0, 0, 300, 300);

    let R = 150;
    let circke = new Path2D();
    circke.arc(R, R, R, 0, 2*Math.PI)
    context.stroke(circke)
}


window.onload = function() {
    draw_watch();
}