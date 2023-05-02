const repeatString = function(string, num) {
    let result = [];
    if (num >= 0) {
    for (let i = 0; i < num; i++) {
        result.push(string);
    }
    return result.join("").toString();
    } else if (string === '') {
        return '';
    } else {
        return "ERROR";
    }
};
console.log(repeatString('', 10));
// Do not edit below this line
module.exports = repeatString;
