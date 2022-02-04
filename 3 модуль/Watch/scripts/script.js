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


function draw_watch(R) {
    context.clearRect(0, 0, 300, 300);

    let circle = new Path2D();
    circle.arc(R+2, R+2, R, 0, 2*Math.PI); 
    context.stroke(circle);

    draw_division(R);
}

function get_time(R){
    let date = new Date();
    let day = date.getDate();
    let mounth = date.getMonth()+1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hoursAngle = ((hours % 12) / 12) * (2 * Math.PI);
    let minutesAngle = (minutes / 60) * (2 * Math.PI);
    let secondsAngle = (seconds / 60) * (2 * Math.PI);

    hoursAngle = Math.PI / 2 - hoursAngle;
    minutesAngle = Math.PI / 2 - minutesAngle;
    secondsAngle = Math.PI / 2 - secondsAngle;

    document.getElementById("fulltimeform").innerHTML = hours + ":" + minutes + ":" + seconds;
    document.getElementById("fulldateform").innerHTML = day + "." + mounth + "." + year;

    draw_hour(hoursAngle, R)
    draw_minute(minutesAngle, R)
    draw_second(secondsAngle, R)

    return hours, minutes, seconds, hoursAngle, minutesAngle, secondsAngle;

}


function draw_hour(hoursAngle, R) {
    let hX, hY;

    hX = Math.cos(hoursAngle) * 0.5 * R;
    hY = -Math.sin(hoursAngle) * 0.5 * R;

    hX += R;
    hY += R;

    let hourline = new Path2D();

    hourline.moveTo(R+2, R+2);
    hourline.lineTo(hX, hY);

    context.lineWidth = 3.5;
    context.stroke(hourline);
}

function draw_minute(minutesAngle, R){
    let mX, mY;

    mX = Math.cos(minutesAngle) * 0.7 * R;
    mY = -Math.sin(minutesAngle) * 0.7 * R;

    mX += R;
    mY += R;

    let minuteline = new Path2D();

    minuteline.moveTo(R+2, R+2);
    minuteline.lineTo(mX, mY);

    context.lineWidth = 2.5;
    context.stroke(minuteline);
}

function draw_second(secondsAngle, R){
    let sX, sY;

    sX = Math.cos(secondsAngle) * 0.9 * R;
    sY = -Math.sin(secondsAngle) * 0.9 * R;

    sX += R;
    sY += R;

    let secondline = new Path2D();

    secondline.moveTo(R+2, R+2);
    secondline.lineTo(sX, sY);

    context.strokeStyle = "red";
    context.lineWidth = 2;
    context.stroke(secondline);
    context.strokeStyle = "black";
    context.lineWidth = 1;
}

function test_settimeout() {
    
}

window.onload = function watchwork() {
    let R = 150
    draw_watch(R);
    get_time(R);
    test_settimeout();
    setTimeout(watchwork, 1000);
}

