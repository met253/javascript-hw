// Створіть клас Animal, який має властивість name. Створіть клас Dog, який наслідується від Animal і має властивість breed. Створіть об'єкт myDog класу Dog з ім'ям Buddy і породою Labrador Retriever.
// const myDog = new Dog('Buddy', 'Labrador Retriever');
// console.log(myDog); // { name: 'Buddy', breed: 'Labrador Retriever' }


// class Animal {
//     constructor(name) {
//         this.animalName = name;
//     }
// }


// class Dog extends Animal{
//     constructor(breed, animalName) {
//         super(animalName);
//         this.breed = breed;

//     }
// }
// const myDog = new Dog('Buddy', 'Labrador Retriever');
// console.log(myDog); 


// Нехай є базовий клас Animal з методом makeSound(). Створіть підклас Cat, який буде наслідувати Animal та перевизначати метод makeSound().
// const animal = new Animal();
// animal.makeSound(); // "The animal makes a sound"
// const cat = new Cat();
// cat.makeSound(); // "Meow"

// class Animal {
//     // constructor(animalName) {
//     //   this.animalName = animalName;
//     // }
//     makeSound() {
//       console.log("Roaaaaar");
//     }
//   }


//   class Cat extends Animal {

//     makeSound() {
//       console.log("nya");
//     }
//   }


//   const animal = new Animal();
//   animal.makeSound(); // "The animal makes a sound"
//   const cat = new Cat();
//   cat.makeSound(); // "Meow"

// Створіть клас Shape, який має властивість color і метод draw. Створіть клас Circle, який наслідується від Shape і має властивість radius та перезаписує метод draw для відображення кола. Створіть об'єкт myCircle класу Circle з радіусом 5 і коліром "red".
// const myCircle = new Circle('red', 5);
// myCircle.draw(); // Drawing a circle with radius 5
// console.log(myCircle.color); // "red"


// class Shape {
//     constructor({color = ""}) {
//         this.color = color;
//     }
//     draw() {
//         console.log("drawing...")
//     }
// }

// class circle extends Shape {
//     constructor({ radius = 0}) {
//         super(color);
//         this.radius = radius;
//     }
//     draw() {
//         console.log("@")
//     }
// }

// Нехай є базовий клас Person з властивостями name та age. Створіть підклас Employee, який буде мати всі властивості базового класу, а також властивість position.
// const john = new Employee("John", 32, "programmer");
// console.log(john.getInfo()); // "John is a programmer and is 32 years old"

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    constructor(name, age, position) {
        super(name, age)
        this.position = position;

    }
    getInfo() {
        return (`${this.name} is a programmer and is ${this.age} years old`)
    }
}
const john = new Employee("John", 32, "programmer");
console.log(john.getInfo()); // "John is a programmer and is 32 years old"

//

//  Створіть клас Book, який буде мати властивості title 
//  (назва книги), author (автор книги) та price (вартість книги).
//   Створіть клас Bookstore, який буде мати властивість books 
//   (масив з об'єктів типу Book). Створіть методи для додавання книги у 
//   книжковий магазин (addBook(book)), 
//   видалення книги з книжкового магазину (removeBook(book)) 
//   та виведення всіх книг з книжкового магазину (listBooks()).
// Приклад використання:
// class Book {
//     constructor(title, author, price) {
//         this.title = title;
//         this.author = author;
//         this.price = price;
//     }
// };

// class Bookstore {
//     constructor(books) {
//         this.books = books;
//     }
//     addBook(book){
//         return this.books.splice(book)
// }
// removeBook(book) {
//     g
// }
// listBook() {
//     return this.books
// }
// };






// const myBookstore = new Bookstore();
// const book1 = new Book('The Catcher in the Rye', 'J.D. Salinger', 10);
// const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 12);
// const book3 = new Book('1984', 'George Orwell', 8);
// myBookstore.addBook(book1);
// myBookstore.addBook(book2);
// myBookstore.addBook(book3);

// myBookstore.listBooks(); // виведе всі книги у книжковому магазині

// myBookstore.removeBook(book2);

// myBookstore.listBooks(); // виведе всі книги у книжковому магазині (без book2)



//=============================================================================


//контекст this 
//він спрацьовує в момент виклику  методу об'єкта
const user = {
    userName : "Artem"
}



//this
const test3 = function

