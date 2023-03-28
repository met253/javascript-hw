const name1 = "Matthew Savula";
const replaceName = name1.replace("M", "@");
console.log(replaceName);
//
console.log(name1.indexOf(" "));
//
const massege = "Ваш баланс поповнено на 10000000000000000000000000000000";
console.log(massege.length);
//
const result = 5+5+5;
console.log() 
//
const pricePerItem = 3500;
const orderedQuantity = 4;
const totalPrice = pricePerItem * orderedQuantity;
console.log(totalPrice);
//
const productName = "Droid";
const pricePerItem69 = 3500;
const message = `You picked ${productName}, price per item is ${pricePerItem69} credicts`;
console.log(message);
//
const pricePerDroid = 800;
const orderedQuantity69 = 6;
const deliveryFee = 50; 
const totalPrice2 = pricePerDroid * orderedQuantity69 + deliveryFee;
const message2 = `You ordered droids worth ${totalPrice2} credits. Delivery ${deliveryFee} credits is included in total price`;
//
const age = 12;
const adult = age > 18;
console.log("Is user more than 17 years old?", adult);
//

const SAVED_PASSWORD = "sus"
let password = prompt("Type your password");
const isMatch = SAVED_PASSWORD === password;
console.log(isMatch);
//
let a = 5;
let b = 10;
let c = 15;
let d = 20;
a += 2;
b -= 4
c *= 3
d /= 10
console.log(a, b, c, d);
//

const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];
const course = courseTopicLength + " " + firstElement + " " + lastElement;
console.log(course);
//
let strData;
let subStrLength;
strData = "sus!";
subStrLength = 20;
const subString = strData.slice(0, subStrLength);
console.log(subString);

// 
const number = 78;
const start = 112;
const end = 221;
const isInRange = number > start && number < end;
const isNotInRange = !isInRange;
console.log(isInRange, isNotInRange);