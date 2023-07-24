const user = {
     mood: "happy",
     hobby: "skydiving",
     premium: false
}
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
//4
const countTotalSalary = (employees) => {
     const salaryArray = Object.values(employees);
     let totalSalary = 0;
     for (const salary of salaryArray) {
       totalSalary += salary;
     }
     return totalSalary;
   };
   
//5


const getAllPropValues = (arr, prop) => {
     const propValues = [];
     for (const obj of arr) {
       propValues.push(obj[prop]);
     }
     console.log(propValues);
     return propValues;
   };
   
   const ert = [
     {
       name: "susa",
     },
     {
       name: "dsdf;asdf;asdf;sak;lf;salcv;zxlckv;lzxckv;zxlcvk;zxv;",
     },
   ];
   
   getAllPropValues(susa, "name");
   