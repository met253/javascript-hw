//1
function Account({ email, login }) {
    this.email = email;
    this.login = login;
}

Account.prototype.getInfo = function () {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
};

console.log(Account.prototype.getInfo); // function
const mango = new Account({
    email: 'mango@dog.woof',
    login: 'Mangozedog',
});
mango.getInfo();// Login: Mangozedog, Email: mango@dog.woof
const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
});
poly.getInfo();// Login: Poly, Email: poly@mail.com

//2

function User({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;

    this.getInfo = function () {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    };
}

const mango = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
});
mango.getInfo(); // User Mango is 2 years old and has 20 followers
const poly = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
});
poly.getInfo(); // User Poly is 3 years old and has 17 followers

//3

function Storage(initialItems) {
    this.items = initialItems;

    this.getItems = function () {
        return this.items;
    };

    this.addItem = function (item) {
        this.items.push(item);
    };

    this.removeItem = function (item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
}

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);
const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
        //
