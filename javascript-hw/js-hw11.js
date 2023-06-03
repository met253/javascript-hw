const logItems = function (array) {
    
    for (let i = 0; i < array.length; i ++ ) {

        console.log(`${i + 1} - ${array[i]}`) ;
        
    }
    return array
  };
  
  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

  //
  
const calculatePrice = function (message, pricePerWord) {
    const messageArray = message.split(" ");
    const price = messageArray.length * pricePerWord;
    console.log(price);
    return price;
 };
 calculatePrice("s;ldlksflkds lalalala lalalalalalaa alalksjdjf lads", 101);
 
 //
 
 function longestWord1 (string) {
    const strToArray = string.split(" ");
    let longestWord = strToArray[0];
    for (let i = 0; i < strToArray.length; i++) {
       if (strToArray[i].length > longestWord.length) {
          longestWord = strToArray[i];
       }
    }
    console.log(longestWord);
    return longestWord;
 };
 
 longestWord1('J KJ Jlk kjll kasjdflaksjdfaskf skdafjlaskdjflaskdjflask');
 
//
 
 //
 
 function Spam (message) {
    const normalizeSpam = message.toLowerCase();
    let spamMassege = normalizeMessage.includes("buy") || normalizeMessage.includes("spam");
    console.log(spamMassege);
    return result;
 }
 Spam('Buy new phone now here: www.newPhone.com');
 
 //
 
 let input = Number(prompt("Number"));
 const numbers = [];
 let total = 0;
 
 while (input) {
    if (NaN(input)) {
       numbers.push(input);
       input = Number(prompt("Number+"));
    } else (isNaN(input)) {
       break;
    } if else(input === null) {
       break;
    }
 }
