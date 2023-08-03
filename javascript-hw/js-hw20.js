// const users = [
//     { name: 'John', balance: 69 },
//     { name: 'Jane', balance: 1 },
//     { name: 'Bob', balance: 41999 },
//   ];
//   const totalBalance = users.reduce((acc, user) => acc + user.balance, 0);
//   console.log(totalBalance);
//   //2
//   const friends = [
//     {
//       name: "a",
//       friends: ["b", "c", "d"],
//     },
//     {
//       name: "b",
//       friends: ["a", "c", "d"],
//     },
//     {
//       name: "c",
//       friends: ["a", "b", "d"],
//     },
//     {
//       name: "d",
//       friends: ["a", "b", "c"],
//     },
//   ];
//3
// const guysFromMoon = [
//   { name: 'idk', friends: 1 },
//   { name: 'qwerty', friends: 2 },
//   { name: 'wow', friends: 69 },
//   { name: 'UWU', friends: 45 },
//   { name: 'OWO', friends: 11 },
//   { name: 'IWI', friends: 15 },
// ];
// function compareFriends(abc, def) {
//   return abc.friends - def.friends;
// }
// guysFromMoon.sort(compareFriends);
// console.log(guysFromMoon.map(person => person.name));
//   //4
  // const knowladge = [
  //   { name: 'bas', skills: ['JavaScript', 'HTML', 'CSS'] },
  //   { name: 'las', skills: ['Python', 'Java', 'SASS'] },
  //   { name: 'gas', skills: ['JavaScript', 'Java', 'CSS'] },
  //   { name: 'mаs', skills: ['Python', 'JavaScript', 'CSS'] },
  // ];
  

  // function getAllUniqueSortedSkills(knowladge) {
  //   const allSkills = knowladge.reduce((acc, user) => {
  //     user.skills.forEach(skill => {
  //       if (!acc.includes(skill)) {
  //         acc.push(skill);
  //       }
  //     });
  //     return acc;
  //   }, []);
  
  //   return allSkills.sort();
  // }
  // const allUniqueSortedSkills = getAllUniqueSortedSkills(knowladge);
  // console.log(allUniqueSortedSkills);