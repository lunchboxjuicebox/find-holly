$(document).ready(function(){
    $('div.app.messages').click(openMessagesApp);
    $('#messages-page > button').click(closeMessagesApp);
    initializeMessagesApp();
})

function openMessagesApp(){
    $('.messages-overlay').css("display","block");
}

function closeMessagesApp(){
    $('.messages-overlay').css("display","none");
}

function initializeMessagesApp(){
    $('.stack-message').click(handleMessageClick);
    $('.individual-back-button').click(closePersonMessages);
}

var people = ['Ellis', 'Dane', 'Ivor', 'Amayah'];
var contactPhotos = [];
var text = ['Hey you wanna go to the beach?', 'OMG you won\'t believe what happened to me', 'When do you plan on starting the next project?', 'Hello??'];

function createTextMessages(){
    for(t=0; t<people.length; t++){
        var divStackMessage = "<div class='stack-message " + people[t].toLowerCase() + "'></div>";
        var divContactPhoto = "<div class='contact-photo'></div>";
        divStackMessage = $(divStackMessage).append(divContactPhoto);
        var div = "<div></div>";
        div = $(div).append('<h3>'+people[t]+'</h3>');
        div = $(div).append('<p>'+text[t].substr(0,50)+'</p>');
        divStackMessage = $(divStackMessage).append(div);
        $('.messages-container').append(divStackMessage);
        $('.messages-container').append('<hr>');
    }
}

var currentPerson = '';

function handleMessageClick(){
    var theText = $(this);
    var person = theText.find('h3').text();
    person = person.toLowerCase()
    currentPerson = person;
    console.log('the current person is: '+ currentPerson);
    closeMessagesApp();
    openPersonMessages(person);
}

function openPersonMessages(person){
    $('.'+person+'-overlay').css("display","block");
}

function closePersonMessages(){
    $('.'+currentPerson+'-overlay').css("display","none");
    openMessagesApp();
}