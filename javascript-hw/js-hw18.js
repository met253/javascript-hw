//1
const names = (namess) => {
  const find = coll.map((obj) => obj.name);
  console.log(find);
};

const namesFound = [{ name: "sus" }, { name: "kvas" }, { name: "owo" }];

names(namesFound);
//2
const eyeColors = (eyee) => {
    const findEye = coll.map((obj) => obj.eye);
    console.log(findEye);
  };
  
  const colorsFound = [{ name: "blue" }, { name: "green" }, { name: "brown" }];
  
  names(colorsFound);
  //3
  const findGender = (coll, gender) => {
    const someGender = coll.filter((person) => person.gender === gender);
    console.log(someGender);
    const genderOfNames = someGender.map((person) => person.name);
    return genderOfNames;
  };
  
  const nameGenders = [
    {
      name: "waowo",
      gender: "male",
    },
    {
      name: "amongus",
      gender: "male_07",
    },
    {
      name: "John",
      gender: "female",
    },
  ];
  
  findSomePeople(nameGenders, "male");
  //4

const usersIsAcctive = [
  { name: "waowo", isActive: true },
  { name: "amongus", isActive: false },
  { name: "John", isActive: true },
  { name: "UWU", isActive: false },
];


const notActive = users.filter(user => !user.isActive);

console.log(notActive);
  //5
  const users = [
    { name: "aa", email: "aa@gmail.com", age: 1 },
    { name: "bb", email: "bb@gmail.com", age: 2 },
    { name: "cc", email: "cc@gmail.com", age: 3 },
    { name: "dd", email: "dd@gmail.com", age: 3 },
  ];
  
  const findEmail = (array, email) => {
    const foundEmail = array.find((person) => person.email === email);
    console.log(foundEmail);
    return foundEmail;
  };
  
  findEmail(users, "aa@gmail.com");
  