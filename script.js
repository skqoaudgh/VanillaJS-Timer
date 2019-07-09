let times = document.getElementsByClassName('time');
let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let paused = false;
let isActive = false;
let timer;
let cur = 0;
let total = 0;

// util Function
function checkTimeInput(event) {
    if(isNaN(event.target.value) ) {
        event.target.value = '';
    }
    else if(event.target.value.length === 1) {
        event.target.value = '0' + event.target.value;
    }
    else if(parseInt(event.target.value) > 60) {
        event.target.value = '';
    }
}

function resetTimer() {
    if(isActive) {
        ctx.beginPath();
        ctx.arc(300, 300, 240, -Math.PI/2, Math.PI*2);
        ctx.strokeStyle = '#e6e6e6';
        ctx.lineWidth = 22;
        ctx.stroke(); 
    
        paused = false;
        clearInterval(timer);
        total = 0;
        cur = 0;
        for(let i=0; i<3; i++) {
            times[i].value = '';
        }
    }
}

function startTimer() {
    if(!paused) {
        total = (+times[0].value)*3600 + (+times[1].value)*60 + (+times[2].value);
        if(total > 0) {
            cur = 0;
            timer = setInterval(function() {
                cur += 0.02;
                drawPieTimer(cur, total);
            }, 20);
            isActive = true;
        }
    }
    else {
        timer = setInterval(function() {
            cur += 0.02;
            drawPieTimer(cur, total);
        }, 20);
        isActive = true;
    }
}

function pauseTimer() {
    if(!paused) {
        paused = true;
        isActive = false;
        clearInterval(timer);
    }
}

// canvas Function
function initialCanvas() {
    ctx.beginPath();
    ctx.arc(300, 300, 250, 0, Math.PI*2);
    ctx.fillStyle = '#e6e6e6';
    ctx.fill();
}

function drawPieTimer(curTime, endTime) {
    let angle = -Math.PI/2 + (Math.PI/180)*(curTime/endTime)*360;
    ctx.beginPath();
    ctx.arc(300, 300, 240, -Math.PI/2, angle);
    ctx.strokeStyle = '#ff7474';
    ctx.lineWidth = 20;
    ctx.stroke(); 
}

function drawTimeText(text) {
    ctx.beginPath();
    ctx.font = "60px Helvetica";
    ctx.fillStyle = "grey";
    ctx.textAlign = "center";
    ctx.fillText(text, 300, 300);
}

// eventListener Function
for(let i=0; i<3; i++) {
    times[i].addEventListener('change', checkTimeInput);
}
start.addEventListener('click', startTimer);
pause.addEventListener('click', pauseTimer);
reset.addEventListener('click', resetTimer);

//-----
initialCanvas();