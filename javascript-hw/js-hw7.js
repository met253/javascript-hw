//

const a1 = 5; // ? Global
 if (true) {
   console.log(a1);
   const a2 = 88; //? Local
 }
 console.log(a2);

 const b1 = 45; //? Global
 if (true) {
   const b2 = 33; //? Local
   if (true) {
     console.log(b2); //?
   }
 }
 if (true) {
   console.log(b2);
 }

//

let lang = "en";
switch (lang) {
  case "jp":
    console.log("1");
    break;
  case "ua":
    console.log("Січень");
    break;
  case "en":
    console.log("January");
    break;
  case "fr":
    console.log("Janvier");
    break;
  default:
    console.log("Вы говорите так быстро, что ни один переводчик вас не поймет");
}

//

const drink = "coffee";
let price;
switch (drink) {
  case "tea":
    price = 25;
    console.log(`you have to pay ${price} grn.`);
    break;
  case "coffee":
    price = 30;
    console.log(`you have to pay ${price} grn.`);
    break;
  case "juice":
    price = 20;
    console.log(`you have to pay ${price} grn.`);
    break;
  default:
    price = 0;
    console.log("Our shop does not have this drink");
}
