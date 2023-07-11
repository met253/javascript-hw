// const fruits = ["apple", "orange", "melon"];
// console.log(fruits);
// console.log("apple", "orange", "melon");
// console.log(...fruits);
// const vegetables = ["carrot", "potato", "pea", "tomato"];
// let basket = [...fruits];
// console.log(basket);
// basket = [...vegetables];
// console.log(basket);
// basket = [...fruits, ...vegetables];
// console.log(basket);

const numbers = [1, 2, 3, 4, 5];
console.log(...numbers);


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);