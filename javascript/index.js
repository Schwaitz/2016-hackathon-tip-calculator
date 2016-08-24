$(function() {
    window.bill = new Bill();
    var billBody = $("#bill");

    $("#addButton").click(function() {
        var name = prompt("Name");
        var price = prompt("Price");
        var number = prompt("Person #");

        billBody.append(createBillItem(name, price, number));

    });
});

function createBillItem(name, price, person) {
    var item = $("<div></div>");
    item.attr({
        "data-name": name,
        "data-price": price,
        "data-person": person
    });
    item.text("Person #" + person + " owes " + price + " for the " + name);
    item.addClass("billItem");
    item.append(
        $("<button></button>")
            .text("Delete")
            .click(function() {
                deleteBillItem(item);
            })
    );
    return item;
}

function deleteBillItem(item) {
    item.remove();
}
