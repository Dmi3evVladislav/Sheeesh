let canvas = document.getElementById("watch");
let context = canvas.getContext("2d");

function draw_watch() {
    context.clearRect(0, 0, 300, 300);

    let R = 150;
    let circle = new Path2D();
    circle.arc(R+2, R+2, R, 0, 2*Math.PI); 
    context.stroke(circle);
}

window.onload = function() {
    draw_watch();
}