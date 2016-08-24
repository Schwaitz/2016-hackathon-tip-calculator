function Bill() {
    this.items = [];
    this.people = [];

    //Unique id counter
    this.nextPerson = 1;

    //Testing
    this.addPerson("Test Guy 1");
    this.addPerson("Test Guy 2");
    this.addPerson("Test Guy 3");
    this.addItem()
}

Bill.prototype.addItem = function(name, price, personNumber) {
    var item = new Bill.Item(this);

    //TODO: Make text fields for this
    item.name = name;
    item.price = price;
    item.person = this.people[personNumber];

    $("#bill").append(item.getJQ());
};

Bill.prototype.deleteItem = function(item) {
    item.removeJQ();

    //Remove item from our items
    this.items.splice(this.items.indexOf(item), 1);
};

Bill.prototype.addPerson = function(name) {
    var person = new Bill.Person();

    //TODO: Text field
    person.name = name;

    //Add them to the list
    person.id = this.nextPerson ++;
    this.people[person.id] = person;
};
