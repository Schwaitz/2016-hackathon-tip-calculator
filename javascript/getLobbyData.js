$(document).ready(function() {




});

function check_status() {


    $.ajax({
        type: "GET",
        url: "../ajax/check_status.php",
        dataType: "text"

    })

    .done(function(status) {

        alert(status);

    })

    .fail(function(jqXHR, textStatus, errorThrown) {
        alert("AJAX call failed: " + textStatus + ", " + errorThrown);

    });


}

}