$(document).ready(function() {
    

    update_lobby();
    var interval = setInterval(update_lobby, 1000);


});

function update_lobby() {

var name = $("#lobbyName").text();

    $.ajax({
        url: "../ajax/update_lobby.php",
        method: "POST",
        data: {"lobby" : name},
        dataType: "text"

    })

    .done(function(response) {
        
        
        $("#data").text(response);


    })

    .fail(function(jqXHR, textStatus, errorThrown) {
        alert("AJAX call failed: " + textStatus + ", " + errorThrown);

    });



}