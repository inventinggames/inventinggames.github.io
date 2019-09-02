(function() {
    var last;
    var delay = false;
   
    document.getElementById('delay-button').addEventListener('click', function(e){
        delay = !delay;
        if (delay){
            this.style.backgroundColor = "#FE5F55";
        }else{
            this.style.backgroundColor = "";
        }
    })
    

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds){
            break;
            }
        }
    }

    var draw = function(){
        var time = performance.now();
        var frameTime = (time - last).toFixed(2);
        last = time;

        if (delay){
            sleep(20);
        }

        document.getElementsByClassName('clear-frame-rate')[0].innerText = 'FPS: ' + Math.round(1000/Number(frameTime));
    }

    var lastAnim;
    var drawAnim = function(timeAnim){
        var frameTimeAnim = (timeAnim - lastAnim).toFixed(2);
        lastAnim = timeAnim;
        
        document.getElementsByClassName('anim-frame-rate')[0].innerText = 'FPS: ' + Math.round(1000/Number(frameTimeAnim));

        window.requestAnimationFrame(drawAnim);
    }
    window.requestAnimationFrame(drawAnim)

    var int = setInterval(draw, 1000/60);
})();