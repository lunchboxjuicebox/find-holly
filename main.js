$(document).ready(function(){
    createTextMessages();
    $('#unlock-button').click(function(){
        $('div.unlock-screen').css('display','none');
    });
    $('#lock-button').click(function(){
        playUnlockSound();
        $('div.unlock-screen').css('display','block');
    });
});

// not sure if i want to keep this, doesn't do well on mobile/wifi
// could try making it play full sound instead of half a second
function playUnlockSound(){
    var unlockSound = new Audio('assets/sounds/shotgun-reload.mp3');
    unlockSound.play();
    setTimeout(function(){
        unlockSound.pause();
    },
    450);
}