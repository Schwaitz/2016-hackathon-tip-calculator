function Lobby(name) {
    this.name = name;

    this.bill = new Bill();
    this.bill.lobby = this;
}

Lobby.prototype.addItem = function(item) {
    $.ajax({
        method: "POST",
        url: "./php/addItemToLobby.php",
        cache: false,
        dataType: "JSON",
        data: {
            "lobby": this.name,
            "name": item.name,
            "price": item.price,
            "person": item.person.name
        }
    }).done(function(data) {
        this.update();
    }.bind(this));
};

Lobby.prototype.deleteItem = function(item) {
    $.ajax({
        method: "POST",
        url: "./php/deleteItemFromLobby.php",
        cache: false,
        dataType: "JSON",
        data: {
            "lobby": this.name,
            "name": item.name
        }
    }).done(function(data) {
        this.update();
    }.bind(this));
};

Lobby.prototype.addPerson = function(person) {
    $.ajax({
        method: "POST",
        url: "./php/addPersonToLobby.php",
        cache: false,
        dataType: "JSON",
        data: {
            "lobby": this.name,
            "name": person.name
        }
    }).done(function(data) {
        this.update();
    }.bind(this));
};

Lobby.prototype.deletePerson = function(person) {
    $.ajax({
        method: "POST",
        url: "./php/deletePersonFromLobby.php",
        cache: false,
        dataType: "JSON",
        data: {
            "lobby": this.name,
            "name": person.name
        }
    }).done(function(data) {
        this.update();
    }.bind(this));
};

Lobby.prototype.update = function() {
    $.ajax({
        method: "POST",
        url: "./php/updateLobby.php",
        cache: false,
        dataType: "JSON",
        data: {
            "lobby": this.name
        }
    }).done(function(data) {
        console.log(data);

        data = JSON.parse(data);

        //Delete everything we have and replace it with the data
        while (this.bill.items.length) {
            var item = this.bill.items[0];
            this.bill.deleteItem(item);
        }
        Object.keys(this.bill.people).forEach(function(key) {
            var person = this.bill.people[key];
            this.bill.deletePerson(person);
        }, this);

        data.people.forEach(function(person) {
            this.bill.addPerson(new Bill.Person(this.bill, person.name));
        }, this);
        data.items.forEach(function(item) {
            var testName = item.person;
            var person = this.bill.people[Object.keys(this.bill.people).find(function(test) {
                if (this.bill.people[test].name === testName)
                    return test;
            }, this)];
            if (typeof(person) === "undefined") {
                person = new Bill.Person(this.bill, item.person);
                this.bill.addPerson(person);
            }
            this.bill.addItem(new Bill.Item(this.bill, item.name, item.price, person));
        }, this);
    }.bind(this));
};
