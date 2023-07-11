const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
  };
  
  const { name, age, email } = user;



  //
  const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    features: ['power windows', 'rear camera', 'navigation'],
    safety: {
      airbags: true,
      antilock_brakes: true,
      stability_control: true
    }
  }


  const { make, model, year, features,  safety:{airbags, antilock_brakes, stability_control} } = car;
console.log(airbags);
  console.log(make, model, year, features, safety);