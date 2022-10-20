let boxW = document.getElementById("boxWidth");
let boxH = document.getElementById("boxHeight");
let boxC = document.getElementById("boxColor");
let ballWH = document.getElementById("ballWidthHeight");
let ballC = document.getElementById("ballColor");
let stepBall = document.getElementById("ballStep");
let box = document.getElementById("box");
let ball = document.getElementById("ball");
let saveB = document.getElementById("save");
let resetB = document.getElementById("reset");

ResetBall();

saveB.addEventListener('click', function () {
    box.style.backgroundColor = boxC.value;
    box.style.width = parseInt(boxW.value) + "px";
    box.style.height = parseInt(boxH.value) + "px";
    ball.style.width = parseInt(ballWH.value) + "px";
    ball.style.height = parseInt(ballWH.value) + "px";
    ball.style.backgroundColor = ballC.value;
    step = parseInt(stepBall.value);
})
resetB.addEventListener('click', function () {
    ball.style.left = Math.floor(box.clientWidth - ball.clientWidth) / 2 + "px";
    ball.style.top = Math.floor(box.clientHeight - ball.clientHeight) / 2 + "px";

});

document.body.addEventListener('keydown', e => {
    if (e.key == "ArrowUp") {
        if (parseInt(ball.style.top) > step) {
            ball.style.top = parseInt(ball.style.top) - step + "px";
        }
    }
    if (e.key == "ArrowDown") {
        if (parseInt(ball.style.top) < box.clientHeight - step - ball.clientHeight) {
        ball.style.top = parseInt(ball.style.top) + step + "px";
         }
    }
    if (e.key == "ArrowLeft") {
        if (parseInt(ball.style.left) > step) {
            ball.style.left = parseInt(ball.style.left) - step + "px";
        }
    }

    if (e.key == "ArrowRight") {
         if (parseInt(ball.style.left) < box.clientWidth - step - ball.clientWidth) {
        ball.style.left = parseInt(ball.style.left) + step + "px";
         }   
    }
})

function ResetBall() {
    ball.style.left = Math.floor(box.clientWidth - ball.clientWidth) / 2 + "px";
    ball.style.top = Math.floor(box.clientHeight - ball.clientHeight) / 2 + "px";
}