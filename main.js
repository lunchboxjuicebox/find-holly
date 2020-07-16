$(document).ready(function(){
    createTextMessages();
    $('#unlock-button').click(function(){
        //playUnlockSound();
        $('div.unlock-screen').css('display','none');
    });
    $('#lock-button').click(function(){
        playUnlockSound();
        $('div.unlock-screen').css('display','block');
    });
});

function playUnlockSound(){
    var unlockSound = new Audio('assets/sounds/shotgun-reload.mp3');
    unlockSound.play();
    setTimeout(function(){
        unlockSound.pause();
    },
    455);
}