function Bill() {
    //Start off with empty lists
    this.items = [];
    this.people = [];

    //Unique id counter
    this.nextPerson = 1;

    //Testing
    this.addPerson("Test Guy 1");
    this.addPerson("Test Guy 2");
    this.addPerson("Test Guy 3");

    this.addItem("Test Food", "4200", 1);
    this.addItem("Test Other Food", "2400", 2);
}

//Add a food item to the bill (and page)
Bill.prototype.addItem = function(name, price, personNumber) {
    var item = new Bill.Item(this);

    //Set up the item's fields
    item.name = name;
    item.price = price;
    item.person = this.people[personNumber];

    //Add the item to the list
    this.items.push(item);

    //And actually add it to the page
    item.appendJQ();

    //And update the results
    this.calculateResults();
};

//Remove a food item from the bill
Bill.prototype.deleteItem = function(item) {
    //Remove from the page
    item.removeJQ();

    //Remove this from our items
    this.items.splice(this.items.indexOf(item), 1);

    //And update the results
    this.calculateResults();
};

//Add a person to the bill (and page)
Bill.prototype.addPerson = function(name) {
    var person = new Bill.Person(this);

    //Set up the person's fields
    person.name = name;

    //Add them to the list
    person.id = this.nextPerson ++;
    this.people[person.id] = person;

    //And actually add it to the page
    person.appendJQ();

    //And update the results
    this.calculateResults();
};

//Remove a person from the bill
Bill.prototype.deletePerson = function(person) {
    //Remove from the page
    person.removeJQ();

    //Remove this from our items
    this.people.splice(this.people.indexOf(person), 1);

    //And update the results
    this.calculateResults();
};

Bill.prototype.calculateResults = function() {
    //Calculate, for each person in bill.people, how much they owe (sum of all food items they own).
    // Food items are stored in bill.items, and each item has a 'person' field and a 'price' field.
    // The 'person' field is the same as the person in bill.people

    var gratuity = parseInt($("#gratuityBoxInput").val());
    //Convert to a mult factor
    gratuity = 1 + (gratuity / 100);

    var resultsBody = $("#results");
    resultsBody.empty();

    //Reset how much everyone owes so we start calculating from zero
    Object.keys(this.people).forEach(function (id) {
        this.people[id].owed = 0;
    }, this);

    var billTotal = 0;
    var gratTotal = 0;
    var subTotal = 0;

    //Add how much each item is worth to that person's total
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        item.person.owed += item.price * gratuity;

        subTotal += parseInt(item.price);
        billTotal += item.price * gratuity;
        gratTotal += (item.price * (gratuity - 1));
    }

    //Add their totals to the list of totals
    Object.keys(this.people).forEach(function (id) {
        var person = this.people[id];
        resultsBody.append(
            $("<div></div>")
                .addClass("result")
                .append(
                    $("<strong></strong>").text(person.name + ": ")
                )
                .append(
                    $("<span></span>").text(formatCurrency(person.owed))
                )
        );
    }, this);


    resultsBody.append(
        $("<div></div>")
            .addClass("result")
            .append(
                $("<strong></strong>").text("Subtotal: ")
            )
            .append(
                $("<span></span>").text(formatCurrency(subTotal))
            )
    );
    resultsBody.append(
        $("<div></div>")
            .addClass("result")
            .append(
                $("<strong></strong>").text("Gratuity Total: ")
            )
            .append(
                $("<span></span>").text(formatCurrency(gratTotal))
            )
    );
    resultsBody.append(
        $("<div></div>")
            .addClass("result")
            .append(
                $("<strong></strong>").text("Total: ")
            )
            .append(
                $("<span></span>").text(formatCurrency(billTotal))
            )
    );
};
