function Bill() {
    this.items = [];
    this.people = [];

    //Unique id counter
    this.nextPerson = 1;

    this.addPerson("Test Guy 1");
    this.addPerson("Test Guy 2");
    this.addPerson("Test Guy 3");
}

Bill.prototype.addItem = function() {
    var item = new Bill.Item(this);

    //TODO: Make text fields for this
    item.name = prompt("Name");
    item.price = prompt("Price");
    item.person = this.people[prompt("Person #")];

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
