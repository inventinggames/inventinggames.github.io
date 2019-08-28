(function() {
    var last;
   
    var draw = function(){
        var time = performance.now();
        var frameTime = (time - last).toFixed(2);
        last = time;

        document.getElementsByClassName('clear-frame-rate')[0].innerText = 'FPS: ' + Math.round(1000/Number(frameTime));
    }

    var int = setInterval(draw, 1000/60);
})();