$(function() {
    var bill = new Bill();

    $("#addItemButton").click(function() {
        //Get the values from the text boxes
        var nameField = $("#addItemName");
        var priceField = $("#addItemPrice");
        var personField = $("#addItemPerson");
        var name = nameField.val();
        var price = priceField.val();
        var person = personField.val();

        //Clear them so we can use them next time
        nameField.val("");
        priceField.val("");
        personField.val("");

        //Add the item to the bill
        bill.addItem(name, price, person);

        //Update how much everyone has to pay
        calculateResults();
    });
    $("#addPersonButton").click(function() {
        //Get the value from the text box
        var nameField = $("#addPersonName");
        var name = nameField.val();

        //Clear it so we can use it again
        nameField.val("");

        //Add the person to the bill
        bill.addPerson(name);

        //Update how much everyone has to pay
        calculateResults();
    });

    function calculateResults() {

    }
});
