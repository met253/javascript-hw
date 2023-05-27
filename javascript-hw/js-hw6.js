if ("0") {

    console.log( 'Привіт' );
   
   }
   //
const name1 = "Яка “офіційна” назва JavaScript?";
console.log(name1);


//

const question = prompt("Яка “офіційна” назва JavaScript?");
if ((question === "ECMAScript")) {
  console.log("Правильно!");
} else {
  console.log("Ви не знаєте? ECMAScript!");
}

//

const x1 = 10;
const x2 = 30;
const number = 45;
if (number < x1) {
  console.log("Число входить в відрізок №1");
} else {
  console.log("Число не входить в відрізок №1");
}

if (number > x1) {
  console.log("Число входить в відрізок №2");
} else {
  console.log("Число не входить в відрізок №2");
}

if (number > x1 || number < x2) {
  console.log("Число входить в відрізок №3");
} else {
  console.log("Число не входить в відрізок №3");
}

if (number < x1 || number > x2) {
  console.log("Число входить в відрізок №4");
} else {
  console.log("Число не входить в відрізок №4");
}

//

const isOnline = false;
const isFriend = true;
const iss = false;
if (isOnline === true && isFriend === true && iss === true) {
  console.log("User can open a chat");
} else {
  console.log("User cannot open a chat");
}

//
const free = "free";
const pro = "pro";
const vip = "vip";
let statusUser = pro;
if (statusUser === pro || statusUser === vip) {
  console.log("Access to explore new content");
} else {
  console.log("No access to explore new content");
}


//

const userNumber = prompt("Type any number here");
if (55 < userNumber < 99) {
  console.log("Число потрапляє в діапазон");
} else {
  console.log("Число не потрапляє в діапазон");
}

//

const maximAge = 55;
if (0 <= maximAge && maximAge <= 16) {
  console.log("Max is kid.");
} else if (17 <= maximAge && maximAge <= 60) {
  console.log("Max is adult.");
} else if (61 <= maximAge && maximAge <= 100) {
  console.log("Max is pensioner.");
} else {
  console.log("Max is not here anymore.");
}

//

const nameLenght = "Matthew".length;
const lastnameLenght = "Savula".length;
if (nameLenght >= 4 && lastnameLenght >= 5) {
  const all = nameLenght + lastnameLenght;
  console.log(all);
} else {
  console.log("Can do that");
}

//


let result;
const a = 19;
const b = 5;
result = a + b < 4 ? (result = "Нижче") : (result = "Вище");

//

const mathRandomNumber = Math.round(Math.random() * (5 - 1) + 1);
if (mathRandomNumber === 5) {
  console.log("five");
} else if (mathRandomNumber === 4) {
  console.log("four");
} else if (mathRandomNumber === 3) {
  console.log("three");
} else if (mathRandomNumber === 2) {
  console.log("two");
} else if (mathRandomNumber === 1) {
  console.log("one");
} else if (mathRandomNumber === 0) {
  console.log("zero");
} else {
  console.log("NaN");
}

console.log("👑💀🔥😯👨‍💻😎😶‍🌫️🫥(～￣▽￣)")





