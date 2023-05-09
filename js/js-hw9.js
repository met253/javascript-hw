const numberr = [1, 2, 3];
numberr[1] = 10;
console.log(numberr);
//
const asd = ["hi", "hi", "hi"];
asd.push("hello");
console.log(asd);
//

const sus = [3, 3, 3, 3, 3];
for (let i = 0; i <= sus.length; i += 1) {
  console.log(sus[i]);
}
//
const arrayLong = ["Hi", "HiHiHiHiHiHiHi", "Hi", "Hi", "HiHiHiHiHiHiHiHiHiHiHiHiHiHi"];
let arrayLong2;
let e;
for (let i = 0; i < arrayLong.length; i += 1) {
  e = arrayLong[i];
  console.log(e);
  arrayStrLenght =e.length;
  if (arrayLong2 >= 5) {
    console.log(e);
  }
}
//6
const numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ,9 , 10];
let maxNumber = numbers[0]
for (const number of numbers ) {
    if (number > maxNumber) {
        maxNumber = number
    }
}
console.log(maxNumber);
//

const numLong = [2, 4, 7, 8, 9, 767, 768, 44, 346, 77];
const numLong2 = numLong.length;
for (let i =+ 1; i >= numLong; i += 1) {
  if (numLong[i] % 2 === 0) {
    console.log(numLong[i]);
  }
}

