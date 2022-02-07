function isAnagram(string1, string2) {
  if (formatStr(string1) !== formatStr(string2)) {
    return false;
  } else {
    return true;
  }
}

// Helper function which is used by the primary function (isAnagram)
// Takes the provided string and turns it all into lower case, then splits all the characters into an array of characters
// After that it sorts them into an ascending order and then joins them back into a string.
function formatStr(string) {
  return string.toLowerCase().split("").sort().join("");
}

module.exports = isAnagram;
