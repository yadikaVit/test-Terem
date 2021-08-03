$(".button-show").on("click", function () {
    $(".first-row").toggle();
});

$(".button-revers").on("click", function () {
    $("#second-in-second-row").toggleClass("order-first");

});

$(document).ready(function () {
    $("#myModalBox").modal('show');
    $(".modal-close-button").on("click", function () {
        $("#myModalBox").modal('hide');
    });
});


$('#myform').submit(function (evt) {

    evt.preventDefault();
    const data = JSON.stringify($(this).serializeArray());
    $('.form-results').append(document.createTextNode(data));
});
