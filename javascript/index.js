$(function() {
    var bill = new Bill();

    $("#addItemButton").click(function() {
        var nameField = $("#addItemName");
        var priceField = $("#addItemPrice");
        var personField = $("#addItemPerson");

        var name = nameField.val();
        var price = priceField.val();
        var person = personField.val();

        nameField.val("");
        priceField.val("");
        personField.val("");

        bill.addItem(name, price, person);
    });
    $("#addPersonButton").click(function() {
        var nameField = $("#addPersonName");

        var name = nameField.val();

        nameField.val("");

        bill.addPerson(name);
    })
});
