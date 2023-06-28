//1
const myArrey = {
    name: "Mathew",
    age: 12,
    city: "Barcelona",
    occupation: "websites",

}

myArrey.city = "Kiev"
console.log(myArrey)
//2
const basket = [
    {
        name: "apple",
        tree: "appleTree",
        isGood: true,
        popular: true,
        stars: 10,

    },
    {
        name: "pineapple",
        tree: "pineapple Sky",
        isGood: true,
        popular: true,
        stars: 100000,
        treeLocate: {
            country: "Ukraine",
            city: "Kiev",
        }

    },
    {
        name: "pear",
        tree: "pearTree",
        isGood: true,
        popular: false,
        stars: 9.5,

    }
]
console.log(basket[1].treeLocate.city)
console.log(basket[1].treeLocate.country)
console.log(basket[0].name)
//3
const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",

    descr: "Spacious apartment in the city center",

    rating: 4,

    price: 2153,

    tags: ["premium", "promoted", "top"],

    owner: {
        name: "Henry",

        phone: "982-126-1588",

        email: "henry.carter@aptmail.com",
    }
}
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;

//4

const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price,
  image,
  tags,
};

console.log(product.name);