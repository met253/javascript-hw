const person = {
    country: "Ukraine",
    age: 21,
    language: "Ukrainian",
    };
    
    const firstPerson = Object.create(person);
    console.log(firstPerson.country);
    firstPerson.personName = "AmongusSUS";
    console.log(firstPerson);
    
    
    