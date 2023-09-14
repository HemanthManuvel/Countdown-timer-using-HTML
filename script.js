document.addEventListener('DOMContentLoaded',function () {
    document.addEventListener('keypress',function(e){
        if (e.key == 'Escape' || e.key == 'Esc') {
            reset();
        }
    },false)
    var input = null;
    var interval = null;    
    var timer = 0;
    var stoptime=0;
    document.getElementById('tInput').addEventListener('keypress',function(e){
        if (e.key == 'Enter') {
            e.preventDefault();
            start();
        }
    },false);
    document.getElementById('start').addEventListener('click',start,false);
    document.getElementById('stop').addEventListener('click',stop,false);
    document.getElementById('reset').addEventListener('click',reset,false);
    document.getElementById('restart').addEventListener('click',restart,false);
    function timerValue(){
        if (timer >= 0) {
            document.getElementById("timer").innerHTML = timer--;
        }
        else{
            document.getElementById("timer").innerText = "Timer End";
            alert("Time Over");
            stop();
        }
    };    
    function start(){
        input = document.getElementById("tInput").value;
        if (input != null && input > 0 && stoptime==0) {
            clearInterval(interval);
            timer = input;
            interval = setInterval(timerValue,1000)
        }
        else if (stoptime != null) {
            timer = stoptime;
            interval = setInterval(timerValue,1000)
        }
        else{
            reset();
        }
    };
    function stop(){
        clearInterval(interval);
        input = timer;
        stoptime=timer;
        document.getElementById('tone').parentNode.removeChild(document.getElementById('tone'));    
    };
    function reset() {
        input = null;
        timer = 0;
        clearInterval(interval);
        document.getElementById('tInput').value = input;
        document.getElementById('timer').innerText = 'Place your ↑ Value in Seconds';
        document.getElementById('tone').parentNode.removeChild(document.getElementById('tone'));
    };
    function restart() {
        input = document.getElementById("tInput").value;
        if (input != null && input > 0) {
            clearInterval(interval);
            timer = input;
            interval = setInterval(timerValue,1000)
        }
        else{
            reset();
        }
    };
});