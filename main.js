$(document).ready(function(){
    createTextMessages();
    $('.back-button').click(playTinyClick);
});

var tinyClick = new Audio('assets/sounds/tiny-button-push.mp3');

function playTinyClick(){
    setTimeout(function(){
        tinyClick.play();

        setTimeout(function(){
            tinyClick.pause();
            tinyClick.currentTime = 0;
        }, 1000)
    });
}
