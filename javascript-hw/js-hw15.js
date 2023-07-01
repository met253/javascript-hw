const user = [
{
     mood: "happy";,
},

{
     hobby: "happy";
},

{
     premium: false;
},

]

const userKeys = Object.keys(user);

for (const key of userKeys) {
    console.log(`${key}: ${user[key]}`);
  }