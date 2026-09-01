

// nav bar toggling etc

$( '#navMenuButton' ).click(toggleNav); {
}

function toggleNav(event) {
    $('#navMenu').toggle();
    $('#navMenuButton').animate({
        rotate: "+180deg"
    })
}


