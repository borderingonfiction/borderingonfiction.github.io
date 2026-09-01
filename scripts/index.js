

// nav bar toggling etc


function toggleNav(event) {
    $('#navMenu').toggle();
    $('#navMenuButton').animate({
        rotate: "+180deg"
    })
}

$( '#navMenuButton' ).click(toggleNav); {
}
