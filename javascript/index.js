var bill = new Bill();

$(function() {
    var billBody = $("#bill");
    var peopleBody = $("#people");

    $("#addButton").click(function() {
        bill.addItem();
    });
    $("#addPerson").click(function() {
        var name = prompt("Name");

        peopleBody.append(createPerson(name));
    })
});
