$(function() {
    $('#navbar').delegate('li a', "click", function() {
        $('#navToggle').click();
    });
});
