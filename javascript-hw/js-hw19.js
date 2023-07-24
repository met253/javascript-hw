function firstLast(array) {
    const resultArray = [];

    for (let i = 0; i < array.length; i++) {
        const word = array[i];
        const firstLetter = word.charAt(0);
        const lastLetter = word.charAt(word.length - 1);

        resultArray.push(`${firstLetter}${lastLetter}`);
    }

    return resultArray;
}

const array2 = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple', 'kiwi'];
const resultArray2 = firstLast(array2);
console.log(resultArray2);
//2
const people = [
    { name: 'John', surname: 'Doe', age: 32, occupation: 'programmer' },
    { name: 'Jane', surname: 'Lee', age: 26, occupation: 'teacher' },
    { name: 'Mike', surname: 'Watson', age: 42, occupation: 'engineer' },
    { name: 'Emily', surname: 'Brad', age: 29, occupation: 'designer' }
  ];
  
  const peopleWithIdAndFullName = people.map((person, index) => ({
    id: index + 1,
    fullName: `${person.name} ${person.surname}`
  }));
  
  console.log(peopleWithIdAndFullName);