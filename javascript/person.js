Bill.Person = function(bill) {
    this.bill = bill;
};

Bill.Person.prototype.appendJQ = function() {
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
    $("#peopleItems").append(jq);
    $("#addItemPerson").append($("<option></option>").val(this.id).text(this.name));
};

Bill.Person.prototype.removeJQ = function() {
    this.jq.remove();
};
