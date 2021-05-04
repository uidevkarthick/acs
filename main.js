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


    // close seamless popup

    $(".opt-tlt span").click(function () {
        $(".overlay").hide();
        $(".fortrans").hide();
        $(".fordate").hide();
        $("#seemless").prop("checked", false);
    });

    $(".opt-tlt span").click(function () {
        $(".overlay").css("display", "none");
    })

    $(".btn-opt").click(function () {
        $(".opt-pop").css("display", "flex");
    });

    // for otp
    $("#otpverifybtn").attr("disabled", true);
    $("#otpbox").on('keyup', function () {
        var x = $("#otpbox").val().length;
        if (x < 6) {
            $("#otpverifybtn").attr("disabled", true);
        } else {
            $("#otpverifybtn").attr("disabled", false);
        }
    });

    // for ATM
    $("#atmverifibtn").attr("disabled", true);
    $('body').on("DOMSubtreeModified", function () {
        if ($("#atmpininp").val().length < 4 || $("#expdate").val().length < 5) {
            $("#atmverifibtn").attr("disabled", true);
        } else {
            $("#atmverifibtn").attr("disabled", false);
        }
    });

    // for password
    // for entered password
    $("#enteredverifipass").attr("disabled", true);
    $("#entpassword").on("keyup", function () {
        if ($(this).val().length < 4) {
            $("#enteredverifipass").attr("disabled", true);
        } else {
            $("#enteredverifipass").attr("disabled", false);
        }
    });

    $("#resetpassword").on("click", function () {
        $(".entpasssec").hide();
        $(".setpasssec").show();
    })

    // resetpassword
    $("#restsetpassword").attr("disabled", true);
    $("#entpassword").on("keyup", function () {
        if ($(this).val().length < 4) {
            $("#enteredverifipass").attr("disabled", true);
        } else {
            $("#enteredverifipass").attr("disabled", false);
        }
    });

    //for card validations

    var cleave = new Cleave('#expdate', {
        date: true,
        datePattern: ['m', 'y']
    });
    var cleave = new Cleave('#expdatesec', {
        date: true,
        datePattern: ['m', 'y']
    });

})


//page timer
window.onload = countdown2();
var mins2 = 5;
var secs2 = mins2 * 60;

function countdown2() {
    setTimeout("Decrement2()", 60);
    mins2 = 1;
    secs2 = mins2 * 60;
}

function Decrement2() {
    if (document.getElementById) {
        minutes2 = document.getElementById("minutes2");
        seconds2 = document.getElementById("seconds2");
        if (seconds2 < 59) {
            seconds2.innerHTML = secs2;
        } else {
            minutes2.innerHTML = getminutes2();
            seconds2.innerHTML = getseconds2();
        }

        if (mins2 < 0) {
            minutes2.innerHTML = 0;
            seconds2.innerHTML = 0;
        } else {
            secs2--;
            setTimeout("Decrement2()", 1000);
        }
    }
}

function getminutes2() {
    mins2 = Math.floor(secs2 / 60);
    return mins2;
}

function getseconds2() {
    return secs2 - Math.round(mins2 * 60);
}
