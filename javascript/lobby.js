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

        //Delete everything we have and replace it with the data
        while (this.bill.items.length) {
            var item = this.bill.items[i];
            this.bill.deleteItem(item);
        }
        while (this.bill.people.length) {
            var person = this.bill.people[i];
            this.bill.deletePerson(person);
        }
    }.bind(this));
};
