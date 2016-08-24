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

    this.addItem("Test Food", "42", 1);
    this.addItem("Test Other Food", "24", 2);
}

//Add a food item to the bill (and page)
Bill.prototype.addItem = function(name, price, personNumber) {
    var item = new Bill.Item(this);

    //Set up the item's fields
    item.name = name;
    item.price = price;
    item.person = this.people[personNumber];

    //And actually add it to the page
    item.appendJQ();
};

//Remove a food item from the bill
Bill.prototype.deleteItem = function(item) {
    //Remove from the page
    item.removeJQ();

    //Remove this from our items
    this.items.splice(this.items.indexOf(item), 1);
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
};

//Remove a person from the bill
Bill.prototype.deletePerson = function(person) {
    //Remove from the page
    person.removeJQ();

    //Remove this from our items
    this.people.splice(this.people.indexOf(person), 1);
};
