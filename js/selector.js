$(':text').focusin(function() {
    $(this).css('background-color', 'yellow');
});

$(':text').focusout(function() {
    $(this).css('background-color', 'white');
});

$(':input[type="number"]').focusin(function() {
    $(this).css('background-color', 'yellow');
});

$(':input[type="number"]').focusout(function() {
    $(this).css('background-color', 'white');
});

$(document).ready(function() {
    var name_default = 'Introduceti numele';

    $('.text').attr('value', name_default).focus(function() {
        if($(this).val() == name_default) {
            $(this).attr('value', '');
        }
    }).blur(function() {
        if($(this).val() == '' ) {
            $(this).attr('value', name_default);
        }
    });
});

$(document).ready(function() {
    var name_default = 'Introduceti descrierea';

    $('.text1').attr('value', name_default).focus(function() {
        if($(this).val() == name_default) {
            $(this).attr('value', '');
        }
    }).blur(function() {
        if($(this).val() == '' ) {
            $(this).attr('value', name_default);
        }
    });
});