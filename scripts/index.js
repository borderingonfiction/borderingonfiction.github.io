

// nav bar toggling etc

$(document).ready(function() {
    $( '#navMenuButton' ).on('click', function() {
        $('#navMenu').slideToggle();
        $('#navMenuButton').css('transform', 'rotate(180deg)');   
        });
    });
