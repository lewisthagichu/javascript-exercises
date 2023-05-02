// Function that reverses a string
const reverseString = function(word) {
    let strLen = word.length;
    string = [...word];
    newStr = [];

    for (let i = strLen-1; i >= 0; i--) {
        newStr.push(string[i]);
    };
    return newStr.join('').toString();
}

// Do not edit below this line
module.exports = reverseString;
