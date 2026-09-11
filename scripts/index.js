

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

$('#userForm').submit(function (e) {
    e.preventDefault();
    const formDataArray = $(this).serializeArray();
    console.log(formDataArray);
    // [ {name: "name", value: "John Doe"}, {name: "email", value: "john@example.com"}, ... ]

    // Convert to object
    const formDataObj = {};
    formDataArray.forEach(item => {
        formDataObj[item.name] = item.value;
    });
    console.log(formDataObj); // { name: "John Doe", ... }
});

