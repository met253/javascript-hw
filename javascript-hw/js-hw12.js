// function makePizza() {

//   return "Your pizza is being prepared, please wait.";

// }


// const result = makePizza();

// const pointer = makePizza;

// console.log(result);

// console.log(pointer);



// //

// function deliverPizza(pizzaName) {

//   return `Delivering ${pizzaName} pizza.`;

// }

// function makePizza(pizzaName) {

//   return `Pizza ${pizzaName} is being prepared, please wait...`;

// }



// function makeMessage(pizzaName, callback) {

//   return callback(pizzaName);
 

// }
// console.log(makeMessage("peperoni", deliverPizza));


//


function makePizza(pizzaName, callback) {

  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  return callback(pizzaName);
  
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {

  console.log(`Delivering pizza ${pizzaName}.`);

});


makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`)
 
} );

//
const btnRef = document.querySelector("[data-hero-btn]");
const resultRef = document.querySelector("[data-result]");
let result1 = "Hello world!";


const writeAnswer = () => {
  resultRef.textContent = result1;
};

btnRef.addEventListener("click", writeAnswer);

//
const applyCallbackToEachElement = function (arr, callback) {

  return callback(arr);
   

}

const arr = [1, 2, 3, 4, 5];

const squareCallback = function(arr){
  arr.pop()
  arr.push(1)

  arr.shift()
  arr.unshift(5)

  return arr;
}; 

const result = applyCallbackToEachElement(arr, squareCallback);

console.log(result); // [1, 4, 9, 16, 25]
///


const calculateDiscountedPrice = (price, discount, callback) => {
  const discountedPrice = price - discount;
  callback(discountedPrice);
};
const showDiscountedPrice = (discountedPrice) => {
  console.log(discountedPrice);
  return discountedPrice;
};
calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90





