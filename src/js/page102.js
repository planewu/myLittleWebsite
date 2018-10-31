function change1(color) {
    $(".block1").css("background", color);
}

function change2(pro, par) {
    $('.block2').css(pro, par)
}
$('#change3-btn').click(function () {

    alert($('#inputarea').value);
});

$('#change4-btn').click(function () {
    $('.block4').addClass('yellow');
    $('.block4').addClass('high');
    $('.block4').addClass('narrow');
});
