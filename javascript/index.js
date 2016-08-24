var bill = new Bill();

$(function() {
    var billBody = $("#bill");
    var peopleBody = $("#people");

    $("#addButton").click(function() {
        //TODO: Text fields
        var name = prompt("Name");
        var price = prompt("Price");
        var person  = prompt("Person #");


        bill.addItem(name, price, person);
    });
    $("#addPerson").click(function() {
        //TODO: Text field
        var name = prompt("Name");


        bill.addPerson(name);
    })
});
