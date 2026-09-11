

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

var form = $('#guestbook').ajaxSubmit({ /* options */ });
var xhr = form.data('jqxhr');

xhr.done(function () {
});

