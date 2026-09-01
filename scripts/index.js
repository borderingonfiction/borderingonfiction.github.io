

// nav bar toggling etc


$(document).ready(function(){
    $.toggleNav() = function(){
        $('#navMenu').slideToggle();
        $('#navMenuButton').animate({
            rotate: "+180deg"
        })
}


$( '#navMenuButton' ).on('click', function() {
    toggleNav()
})
})
