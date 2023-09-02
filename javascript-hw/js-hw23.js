//1
class Account {
  constructor({ login, email }) {
    this.login = login;
    this.email = email;
  }
  getInfo() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  }
}
console.log(Account.prototype.getInfo); // function
const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});
poly.getInfo(); // Login: Poly, Email: poly@mail.com

//2

class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
  }
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
class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    const itemIndex = this.items.indexOf(item);
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }
  }
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
//4
class StringBuilder {
  constructor(value = '') {
    this._value = value;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value = this._value + str;
  }
  prepend(str) {
    this._value = str + this._value;
  }
  pad(str) {
    this.append(str);
    this.prepend(str);
  }
}
const builder = new StringBuilder('.');
builder.append('^');
console.log(builder.value); // '.^'
builder.prepend('^');
console.log(builder.value); // '^.^'
builder.pad('=');
console.log(builder.value); // '=^.^='


// OWO  UWU  IWI   0W0  YWY    RWR    GWG
 