$(document).ready(function(){
    createTextMessages();
    $('#unlock-button').click(function(){
        playUnlockSound();
        $('div.unlock-screen').css('display','none');
    });
    $('#lock-button').click(function(){
        playUnlockSound();
        $('div.unlock-screen').css('display','block');
    });
});

var unlockSound = new Audio('assets/sounds/shotgun-reload.mp3');

function playUnlockSound(){
    unlockSound.play();
    setTimeout(function(){
        unlockSound.pause();
    },
    455);
}