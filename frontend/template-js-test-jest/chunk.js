// This function takes an array and divides it into smaller chunks of arrays. See the chunk.test.js file for example.
// chunkArray takes two parameters, the array and the length.
const chunkArray = (arr, len) => {
  const chunkedArr = [];

  // Loop through the array
  arr.forEach((val) => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if it is the last, and if it is, then take the length and equal that to the chunk length
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
};

module.exports = chunkArray;
