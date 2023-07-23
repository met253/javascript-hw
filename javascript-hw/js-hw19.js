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