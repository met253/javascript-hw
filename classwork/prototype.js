const friend = {
group: "Fe_2",
shcool: "GoIteens",
};

const firstFriend = Object.create(friend);
console.log(firstFriend.group);
firstFriend.friendName = "Семен";
console.log(firstFriend);


const secondFriend = Object.create(friend);
secondFriend.friendName = "Михаіл";
secondFriend.showInfo = function () {
    console.log(this.friendName);
    return this.friendName;
};
console.log(secondFriend);



const secondFriendClone = Object.create(secondFriend);
console.log(secondFriendClone);

secondFriendClone.friendName = "JOJO";
secondFriendClone.showInfo()
console.log(secondFriendClone.showInfo())



