$(document).ready(function(){
    createTextMessages();
    $('#unlock-button').click(function(){
        playUnlockSound();
        $('div.unlock-screen').css('display','none');
    });
});

var unlockSound = new Audio('assets/sounds/shotgun-reload.mp3');

function playUnlockSound(){
    unlockSound.play();
}