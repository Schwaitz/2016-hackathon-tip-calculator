Bill.Item = function(bill) {
    this.bill = bill;
};

Bill.Item.prototype.getJQ = function() {
    var item = $("<div></div>");
    item.attr({
        "data-name": this.name,
        "data-price": this.price
    });
    item.text(this.person.name + " owes " + this.price + " for the " + this.name);
    item.addClass("billItem");
    item.append(
        $("<button></button>")
            .text("Delete")
            .click(function() {
                item.bill.deleteItem(item);
            })
    );
    return item;
};
