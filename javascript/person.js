Bill.Person = function(bill) {
    this.bill = bill;
};

Bill.Person.prototype.getJQ = function() {
    var jq = $("<div></div>");
    this.jq = jq;
    jq.text(this.name);
    jq.append(
        $("<button></button>")
            .text("Delete")
            .click(function() {
                this.bill.deletePerson(this);
            }.bind(this))
    );
    return jq;
};

Bill.Person.prototype.removeJQ = function() {
    this.jq.remove();
};
