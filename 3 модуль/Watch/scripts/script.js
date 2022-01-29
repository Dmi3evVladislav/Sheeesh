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

window.onload = function() {
    draw_watch();
}

