const sumAll = function(num1, num2) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof(arguments[i]) !== 'number') {
            return "ERROR"
        }
    }

    if (num1 < num2) {
        let len = num2 - num1;
        sum = num1;
        for (let i = 1; i <= len; i++) {
            sum += (num1+i);
        }
    } else if (num1 > num2) {
        let len = num1 - num2;
        sum = num2;
        for (let i = 1; i <= len; i++) {
            sum += (num2+i);
        }
    }
    return sum;
};

console.log(sumAll(123, 1))
// Do not edit below this line
module.exports = sumAll;
