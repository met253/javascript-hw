//

const numberd = 7;
for (let i = 1; i <= 10; i += 1) {
  const tab = numberd * i;
  console.log(`${numberd} * ${i} = ${tab}`);
}

//

let sum = 0;
for (let i = 12; i <= 27; i += 1) {
  sum += i;
  console.log(sum);
}

//

const min = 3;
const max = 9;
let product = 1;
for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
    console.log("Число парне");
  } else {
    product *= i;
    console.log(product);
  }
}

//

for (let i = 1; i <= 100; i += 1) {
  if (i === 49) {
    console.log("49 is detected!");
    break;
  }
}

//

for (let i = 10; i <= 30; i += 1) {
  if (i === 15) {
    continue;
  }
  console.log(i);
}

//
let totalPrice = 0;
let price = 0;
const goods = 8;
for (let i = 1; i <= goods; i += 1) {
  price = Math.round(Math.random() * (5000 - 500) + 500);
  console.log(`The price for ${i} item is ${price}`);
  totalPrice += price;
}
console.log(`The total price is ${totalPrice}`);

//



for (let i = 1; i <= 5; i += 1) {
  console.log(i);
}



let n = 0;
while (n < 5) {
  n++;
  console.log(n);
}



let n2 = 0;
do {
  n2++;
  console.log(n2);
} while (n2 < 5);

sole.log("Ur parents are proud with you!");
// }
let marks = [];
let averageMark = 0;  
let totalSumMarks = 0;

for (let i = 1; i <= 10; i += 1) {
  const mark = Number(Math.round(Math.random() * (12 - 1) + 1));
  marks.push(mark);
  totalSumMarks += mark;
  const marksLenght = marks.length;
  averageMark = Number(Math.round(totalSumMarks / marksLenght));
}

console.log(marks);
console.log(averageMark);

if (averageMark <= 7) {
  console.log(
    `Bad - ${averageMark}, so it is better to not hear it`
  );
} else {
  console.log(`Great! ${averageMark}`);
}

//

let  askNumber = 0;
do {
  askNumber = prompt("Type number from 100 in the bottom");
  askNumber = Number(askNumber);
} while (askNumber >= 100);

//

let num5 = Number(prompt("Type number"));

while (num5 < 100) {
  num5 = Number(prompt("Type number "));
}
if (num5 > 100) {
  console.log("true");
}