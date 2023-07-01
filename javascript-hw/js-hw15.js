const user = {

}
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

console.log(user)

const userKeys = Object.keys(user);

for (const key of userKeys) {
     console.log(`${key}: ${user[key]}`);
}

//2
const friend = {
     name: "Andrew",
     age: 15,
     hobbie: "Computer games",

     countProps() {
          const friendKeys = Object.keys(this);
          const quantity = friendKeys.length;
          return quantity
     }
}

console.log(friend.countProps());
//3

const employeesHome = {
     employees: [
          {
               name: "Sergio",
               rating: 9,
          },
          {
               name: "Dmitry",
               rating: 8,
          },
          {
               name: "Petro",
               rating: 10,
          },
     ],

     findBestEmployee(employees){
          const persons = this.employees
         for (person of persons) {
          if (person.rating) {
              
          }
         } 
     }
}