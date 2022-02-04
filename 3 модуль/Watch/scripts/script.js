let canvas = document.getElementById("watch");
let context = canvas.getContext("2d");


function draw_division(R) {
    let angle, pX, pY, qX, qY;
    for (let i = 0; i < 60; i++ ) {
        
        angle = i/60 * 2*Math.PI;
        pX = Math.cos(angle) * R;
        pY = Math.sin(angle) * R;

        qX = 0.9 * pX;
        qY = 0.9 * pY;

        pX += R+2; qY += R+2;
        qX += R+2; pY += R+2;

        let line = new Path2D();
        line.moveTo(pX, pY);
        line.lineTo(qX, qY);

        if (i % 5 == 0) {
            context.lineWidth = 3;
        } else {
            context.lineWidth = 1;
        }

        context.stroke(line);
    }
}


function draw_watch() {
    context.clearRect(0, 0, 300, 300);

    let R = 150;
    let circle = new Path2D();
    circle.arc(R+2, R+2, R, 0, 2*Math.PI); 
    context.stroke(circle);

    draw_division(R);
}

let hours = 0;
let minutes = 0;
let seconds = 0;

function get_time(hours, minutes, seconds){
let date = new Date();
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();

let secondsAngle = (seconds / 60) * (2 * Math.PI);
let minutesAngle = (minutes / 60) * (2 * Math.PI);
let hoursAngle = ((hours % 12) / 12) * (2 * Math.PI);

document.getElementById("fulltimeform").innerHTML = hours + ":" + minutes + ":" + seconds

}

function draw_hour() {

}

window.onload = function watchwork() {
    draw_watch();
    get_time();
    setTimeout(watchwork, 1000);
}

