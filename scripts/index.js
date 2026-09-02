

// nav bar toggling etc

$(document).ready(function () {
    $('#navMenuButton').on('click', function () {
        $('#navMenu').slideToggle()

    });
});

$(document).on('click', '#navMenuButton', function () {
    $('#navMenuButton').css('transform', 'rotate(180deg)');

});
    
