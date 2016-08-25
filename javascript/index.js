$(function() {
    $("#gratuityBox").combobox({appendId: "Input"});

    var lobby = null;

    $("#addItemButton").click(function () {
        //Get the values from the text boxes
        var nameField = $("#addItemName");
        var priceField = $("#addItemPrice");
        var personField = $("#addItemPerson");
        var name = nameField.val();
        var price = priceField.val() * 100; //Convert to cents
        var person = personField.val();

        //Clear them so we can use them next time
        nameField.val("");
        priceField.val("");
        personField.val("");

        //Add the item to the bill
        lobby.bill.addItem(name, price, person);
    });
    $("#addPersonButton").click(function () {
        //Get the value from the text box
        var nameField = $("#addPersonName");
        var name = nameField.val();

        //Clear it so we can use it again
        nameField.val("");

        //Add the person to the bill
        lobby.bill.addPerson(name);
    });

    var jmodal = $("#joinModal");
    jmodal.modal({
        backdrop: "static",
        keyboard: false,
        show: true
    });

    var cmodal = $("#createModal");
    cmodal.modal({
        backdrop: "static",
        keyboard: false,
        show: false
    });

    $("#showJoinLobbyButton").click(function () {
        cmodal.modal("hide");
        setTimeout(function(){jmodal.modal("show")}, 200);
    });
    $("#showCreateLobbyButton").click(function () {
        jmodal.modal("hide");
        setTimeout(function(){cmodal.modal("show")}, 200);
    });

    $.ajax({
        method: "GET",
        url: "./php/getLobbyList.php",
        cache: false,
        dataType: "JSON"
    }).done(function(data) {
        console.log(data);

        var box = $("#joinLobbyId");
        data.forEach(function (id) {
            box.append($("<option></option>").val(id).text(id));
        });
        box.combobox({appendId: "Input"});

        $("#joinLobbyButton").click(function () {
            var lobbyId = $("#joinLobbyIdInput").val();
            var lobbyPass = $("#joinLobbyPassword").val();

            $.ajax({
                method: "POST",
                url: "./php/joinLobby.php",
                cache: false,
                dataType: "JSON",
                data: {
                    "name" : lobbyId,
                    "password" : lobbyPass
                }
            }).done(function(data) {
                if (data) {
                    jmodal.modal("hide");
                    lobby = new Lobby(lobbyId);
                    lobby.update();
                } else {
                    $("#joinForm").addClass("has-error");
                }
            });
        });
    });

    $("#createLobbyButton").click(function () {
        var lobbyId = $("#createLobbyName").val();
        var lobbyPass = $("#createLobbyPassword").val();

        $.ajax({
            method: "POST",
            url: "./php/createLobby.php",
            cache: false,
            dataType: "JSON",
            data: {
                "name" : lobbyId,
                "password" : lobbyPass
            }
        }).done(function(data) {
            if (data) {
                lobby = new Lobby(lobbyId);
                lobby.update();
            } else {
                //???
            }
        });
    });
});

function formatCurrency(number) {
    number = Math.round(number);
    return "$" + Math.floor(number / 100) + "." + ((number % 100) < 10 ? "0" : "") + (number % 100);
}

