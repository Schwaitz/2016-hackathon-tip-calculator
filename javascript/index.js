$(function() {
    var bill = new Bill();

    $("#addItemButton").click(function() {
        var name = $("#addItemName").val();
        var price = $("#addItemPrice").val();
        var person  = $("#addItemPerson").val();

        bill.addItem(name, price, person);
    });
    $("#addPersonButton").click(function() {
        var name = $("#addPersonName").val();

        bill.addPerson(name);
    })
});
