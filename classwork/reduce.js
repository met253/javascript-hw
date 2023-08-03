// Array.prototype.reduce()
// Переберає по елементно орегінальний масив, вертає що завгодно (Object, element,array)

// const numbers = [1, 2, 3, 4, 5];

// OLD CODE

// let totalSum = 0;
// for (const number of numbers){
//     totalSum += number
// }
// console.log(totalSum);


// NEW CODE

// const totalSum = numbers.reduce((acc, number) => {
// return acc + number
// }, 0);


// const totalSum = numbers.reduce((acc, number) => acc + number, 0);
// console.log(totalSum)
   
// acc = 0 => number = 1 => return 0 + 1
// acc = 1 => number = 2 => return 1 + 2 
// acc = 3 => number = 3 => return 3 + 3
// acc = 6 => number = 4 => return 6 + 4
// acc = 10 => number = 5 => return 10 + 5
// acc = 15
  
// const allHomeworks = {
//     homework1: 10,
//     homework2: 9,
//     homework3: 8,
//     homework4: 10,
// }

// const marks = Object.values(allHomeworks)
// const total = marks.reduce((acc, mark) => acc + mark, 0)
// console.log(total)

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
//   ];

//   const points = players.map(({points}) => points);
//   console.log(points);
//   const totalPoints = points.reduce((acc, point) => acc + point, 0);
//   console.log(totalPoints);

const cart = [
    { label: 'Apples', price: 100, quantity: 2 },
    { label: 'Bananas', price: 120, quantity: 3 },
    { label: 'Lemons', price: 70, quantity: 4 },
  ];

  const cartPrice = cart.reduce((acc, {price, quantity}) => acc + price * quantity, 0);
  console.log(cartPrice);