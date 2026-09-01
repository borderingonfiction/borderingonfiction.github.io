

// nav bar toggling etc

$(document).ready(function() {
    $( '#navMenuButton' ).on('click', function() {
        $('#navMenu').slideToggle();
        $('#navMenuButton').animate({
            rotate: "+180deg"
        });
    });
});
