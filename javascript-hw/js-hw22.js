//2
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