

// nav bar toggling etc

$(document).ready(function () {
    $('#navMenuPlus').on('click', function () {
        $('#navMenu').slideToggle()
        $('#navMenuMinus').toggle()
        $('#navMenuPlus').toggle()
    });

    $('#navMenuMinus').on('click', function () {
        $('#navMenu').slideToggle()
        $('#navMenuMinus').toggle()
        $('#navMenuPlus').toggle()
    });

    $('#hideJournals').on('click', function () {
        $('.journal-pics').slideToggle()
    });


});


// wait for the DOM to be loaded

$(function () {
    // bind 'myForm' and provide a simple callback function
    $('#guestbook').ajaxForm(function () {
        alert("thank you and take care!");
    });
});

var form = $('#guestbook').ajaxSubmit({ /* options */ });
var xhr = form.data('jqxhr');

xhr.done(function () {
});

$.ajax({
    dataType: "json",
    data: FormData,
}
