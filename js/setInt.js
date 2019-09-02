(function() {
    var last;
    var delay = false;
    var delayAnim = false;

    var onDelayButtonClick = function(){
        delay = !delay;
        
        var buttons = document.getElementsByClassName('delay-button');
        for (var i = 0; i < buttons.length; i++){
            if (delay){
                buttons[i].style.backgroundColor = "#FE5F55";
            }else{
                buttons[i].style.backgroundColor = "";
            }
        }
        
    }
   
    var buttons = document.getElementsByClassName('delay-button');
    for (var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', onDelayButtonClick)
    }

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

        if (delay){
            sleep(20);
        }

        window.requestAnimationFrame(drawAnim);
    }
    window.requestAnimationFrame(drawAnim)

    setInterval(draw, 1000/60);
})();