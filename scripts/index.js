

// nav bar toggling etc

$( '#navMenuButton' ).click(toggleNav()); {
}

function toggleNav() {
    $('#navMenu').slideToggle();
    $('#navMenuButton').animate({
        rotate: "+180deg"
    })
}


