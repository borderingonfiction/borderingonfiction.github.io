

// nav bar toggling etc



$.toggleNav() = function(){
    $('#navMenu').slideToggle();
    $('#navMenuButton').animate({
        rotate: "+180deg"
    })
};


$( '#navMenuButton' ).on('click', function() {
    $.toggleNav()
})
