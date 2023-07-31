const users = [
    { name: 'John', balance: 69 },
    { name: 'Jane', balance: 1 },
    { name: 'Bob', balance: 41999 },
  ];
  const totalBalance = users.reduce((acc, user) => acc + user.balance, 0);
  console.log(totalBalance);
  //2
  const friends = [
    {
      name: "a",
      friends: ["b", "c", "d"],
    },
    {
      name: "b",
      friends: ["a", "c", "d"],
    },
    {
      name: "c",
      friends: ["a", "b", "d"],
    },
    {
      name: "d",
      friends: ["a", "b", "c"],
    },
  ];