


$(document).ready(


function() {

check_status();
var interval = setInterval(check_status, 5000);

}

);


function check_status() {


    $.ajax({
        type: "GET",
        url: "./ajax/check_status.php",
        dataType: "text"

    })

    .done(function(status) {

        var arrayStatus = status.split(':');

        if (arrayStatus[0] == "online") {
            setStatus("one", "online");
        } else {
            setStatus("one", "offline");
        }

        if (arrayStatus[1] == "online") {
            setStatus("two", "online");
        } else {
            setStatus("two", "offline");
        }

        if (arrayStatus[2] == "online") {
            setStatus("three", "online");
        } else {
            setStatus("three", "offline");
        }

        if (arrayStatus[3] == "online") {
            setStatus("four", "online");
        } else {
            setStatus("four", "offline");
        }

        if (arrayStatus[4] == "online") {
            setStatus("canton", "online");
        } else {
            setStatus("canton", "offline");
        }
    })

    .fail(function(jqXHR, textStatus, errorThrown) {
        alert("AJAX call failed: " + textStatus + ", " + errorThrown);

    });


}


function setStatus(element, status) {

    if (element == "one") {

        if (status == "online") {

            $("#statusOne").text("Online");
            $("#statusOne").removeClass("offline");
            $("#statusOne").addClass("online");

        } else if (status == "offline") {

            $("#statusOne").text("Offline");
            $("#statusOne").removeClass("online");
            $("#statusOne").addClass("offline");

        }
    } else if (element == "two") {

        if (status == "online") {

            $("#statusTwo").text("Online");
            $("#statusTwo").removeClass("offline");
            $("#statusTwo").addClass("online");

        } else if (status == "offline") {

            $("#statusTwo").text("Offline");
            $("#statusTwo").removeClass("online");
            $("#statusTwo").addClass("offline");

        }
    } else if (element == "three") {

        if (status == "online") {

            $("#statusThree").text("Online");
            $("#statusThree").removeClass("offline");
            $("#statusThree").addClass("online");

        } else if (status == "offline") {

            $("#statusThree").text("Offline");
            $("#statusThree").removeClass("online");
            $("#statusThree").addClass("offline");

        }
    } else if (element == "four") {

        if (status == "online") {

            $("#statusFour").text("Online");
            $("#statusFour").removeClass("offline");
            $("#statusFour").addClass("online");

        } else if (status == "offline") {

            $("#statusFour").text("Offline");
            $("#statusFour").removeClass("online");
            $("#statusFour").addClass("offline");

        }
    } else if (element == "canton") {

        if (status == "online") {

            $("#statusCanton").text("Online");
            $("#statusCanton").removeClass("offline");
            $("#statusCanton").addClass("online");

        } else if (status == "offline") {

            $("#statusCanton").text("Offline");
            $("#statusCanton").removeClass("online");
            $("#statusCanton").addClass("offline");

        }
    }



}
