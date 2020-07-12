$(document).ready(function(){
    $('div.app.messages').click(openMessages);
    $('#messages-page > button').click(closeMessages);
});

function openMessages(){
    $('.messages-overlay').css("display","block");
};

function closeMessages(){
    $('.messages-overlay').css("display","none");
}
