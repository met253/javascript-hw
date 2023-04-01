if ("0") {

    console.log( 'Привіт' );
   
   }
   //
const name1 = "Яка “офіційна” назва JavaScript?";
console.log(name1);
if () {
    
} 

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
  console.log("Число входить в №1");
} else {
  console.log("Число не входить в №1");
}

if (number > x1) {
  console.log("Число входить в №2");
} else {
  console.log("Число не входить в №2");
}

if (number > x1 || number < x2) {
  console.log("Число входить в №3");
} else {
  console.log("Число не входить в №3");
}

if (number < x1 || number > x2) {
  console.log("Число входить в №4");
} else {
  console.log("Число не входить в №4");
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
