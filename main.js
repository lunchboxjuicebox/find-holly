$(document).ready(function(){
    createTextMessages();
    createAllTextPreviews();
    setTimeout(function(){
        createPersonMessage('hey where the hell have you been???', 'ellis');
        playTextAlertSound();
        textMessageAlert('Ellis');
    }, 6000);
    $('#unlock-button').click(function(){
        $('div.unlock-screen').css('display','none');
    });
    $('#lock-button').click(function(){
        //playUnlockSound();
        $('div.unlock-screen').css('display','block');
    });
});

var textAlert = new Audio('assets/sounds/text-message-alert.mp3');

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

function playTextAlertSound(){
    textAlert.play()
}