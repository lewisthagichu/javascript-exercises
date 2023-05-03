// Function to check whether a given year is a leap year
const leapYears = function(year) {
    if (year % 100 === 0 && year % 400 !== 0) {return false}
    else if (year % 4 !== 0) {return false}
    else {return true}
};

// Do not edit below this line
module.exports = leapYears;
