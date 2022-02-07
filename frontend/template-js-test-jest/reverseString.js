// Take the string input, put it all to lower case. Then split the string into an array. Then reverse it and then join it back into a string again.
const reverseString = (str) => str.toLowerCase().split("").reverse().join("");

module.exports = reverseString;
