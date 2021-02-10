$(function () {
    $(".btn-submit").click(function () {
        window.location.href = "process.html";
    });

    $(".rdio").click(function () {

        $(this).find("input").prop("checked", true);
        if ($("#forslect").prop("checked")) {
            $(".fordate").show();
            $(".fortrans").hide();
        } else if ($("#nooftrans").prop("checked")) {
            $(".fordate").hide();
            $(".fortrans").show();
        }
    });

    // seemless select

    $("#seemless").click(function () {
        if ($(this).prop("checked")) {
            $(".overlay").css("display", "flex");
        } else {
            $(".overlay").css("display", "none");
        }
    });

    $(".dne").click(function () {
        $(".overlay").hide();
        $("#seemless").prop("checked", false);
    })

    // today date

    var now = new Date();

    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
    $('#today').val(today);


})