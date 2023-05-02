const removeFromArray = function(arr) {
    let newArr = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[j] === arguments[i]) {
                newArr.splice(j, 1);
            }
        }
    }
    return newArr;
};

//removeFromArray([1, 2, 3, 4], 7, 2);

console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));
// Do not edit below this line
module.exports = removeFromArray;
