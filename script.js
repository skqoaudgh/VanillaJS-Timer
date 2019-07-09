let times = document.getElementsByClassName('time');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

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

//-----
initialCanvas();