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



    })

    .fail(function(jqXHR, textStatus, errorThrown) {
        alert("AJAX call failed: " + textStatus + ", " + errorThrown);

    });


}




}