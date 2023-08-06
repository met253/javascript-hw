const tweets = [
    { id:"000", likes: 5, tags: ["js", "nodejs"]},
    { id:"001", likes: 2, tags: ["js", "nodejs"]},
    { id:"002", likes: 17, tags: ["js", "nodejs"]},
    { id:"003", likes: 8, tags: ["js", "nodejs"]},
    { id:"004", likes: 0, tags: ["js", "nodejs"]},
];


// const allTags = tweets.reduce((acc, {tags}) => {
//   acc.push(tags);
//   return acc;
// }, []);




const allTags = tweets.reduce((acc, {tags}) => {
    acc.push(...tags);
    return acc;
}, []);
console.log(allTags);


const flat = tweets.flatMap(tweet => tweet.tags);
console.log(flat);



const soretedTags = allTags.reduce((tagsStats, tag) => {
    if (tagsStats[tag]) {
        tagsStats[tag] += 1;
        return tagsStats;
    } else{
        tagsStats[tag] = 1;
        return tagsStats
    }
}, {})
console.log(soretedTags);



// const user = { name: "Matviy", }
// const key = "name";
// console.log(user[key]);
// console.log(user[key] === user.name);