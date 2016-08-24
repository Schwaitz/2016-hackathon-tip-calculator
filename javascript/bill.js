function Bill() {
    this.items = [];
    this.people = [];

    //Unique id counter
    this.nextPerson = 1;

    //Testing
    this.addPerson("Test Guy 1");
    this.addPerson("Test Guy 2");
    this.addPerson("Test Guy 3");

    this.addItem("Test Food", "$42", 1);
    this.addItem("Test Other Food", "$24", 2);
}

Bill.prototype.addItem = function(name, price, personNumber) {
    var item = new Bill.Item(this);

    item.name = name;
    item.price = price;
    item.person = this.people[personNumber];

    item.appendJQ();
};

Bill.prototype.deleteItem = function(item) {
    item.removeJQ();

    //Remove this from our items
    this.items.splice(this.items.indexOf(item), 1);
};

Bill.prototype.addPerson = function(name) {
    var person = new Bill.Person(this);

    person.name = name;

    //Add them to the list
    person.id = this.nextPerson ++;
    this.people[person.id] = person;

    person.appendJQ();
};

Bill.prototype.deletePerson = function(item) {
    item.removeJQ();

    //Remove this from our items
    this.people.splice(this.people.indexOf(item), 1);
};
