let times = document.getElementsByClassName('time');

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

for(let i=0; i<3; i++) {
    times[i].addEventListener('change', checkTimeInput);
}