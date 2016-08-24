var bill = new Bill();

$(function() {
    var billBody = $("#bill");
    var peopleBody = $("#people");

    $("#addButton").click(function() {
        bill.addItem();
    });
    $("#addPerson").click(function() {
        var name = prompt("Name");

        //TODO: Text field
        bill.addPerson(prompt("Name"));
    })
});
