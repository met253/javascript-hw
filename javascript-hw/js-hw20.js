const users = [
    { name: 'John', balance: 69 },
    { name: 'Jane', balance: 1 },
    { name: 'Bob', balance: 41999 },
  ];
  const totalBalance = users.reduce((acc, user) => acc + user.balance, 0);
  console.log(totalBalance);
  //