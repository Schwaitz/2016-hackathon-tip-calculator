$(function() {
    window.bill = new Bill();
    var billBody = $("#bill");

    $("#addButton").click(function() {
        var price = prompt("Price");

        billBody.append($("<div></div>").text(price));
    });
});