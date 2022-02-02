// Great youtube video which explains the basics well: https://www.youtube.com/watch?v=rhzKDrUiJVk
// Useful link to test regex: https://regexr.com/

const string1 = "Something random.";
const string2 = "The streets are empty";
const string3 = "newognwieognw";
const string4 = "Something very random. This string is empty.";

const emailExample = "bobmarley23@gmail.com";

// Search for the first time the letters "thing" appears in the string in that particular order
const regex1 = /thing/;

// Search for all the times the letters "om" appears in the string, in that particular order
// ("g" stands for "global")
const regex2 = /om/g;

// Search for all the times the letter "m" appears in the string, but also be case-insensitive
//("i" represents "case insensitivity")
const regex3 = /M/gi;

// Match as many "e"'s as possible in a row, but match at least 1
const regex4 = /e+/g;

// Search for all the "e"'s, but if there is an "a" afterwards, take that too.
// (The "?"-sign makes the "a" optional)
const regex5 = /e+a?/g;

// Search for all the "e"'s, but if there is an "a" afterwards, take that too. This one allows for as many "a"'s
// (The "*"-sign makes the "a" optional and can take as many repitions of it as possible (eaaaaa) would be regarded as 1 instance)
const regex6 = /e+a*/g;

// Search for "om" as well as any other letter that comes before it. In string1 it would result in "Som" and "dom"
// (The "."-sign will match any character, except a new line)
const regex7 = /.om/g;

// Search for the character "."
// (The backslash "\" treats the following character in the regex as the character it is looking for, instead of a regex operation)
// (NOTE: The backslash has a different function on other characters that are not associated with regex operations. See regex9 for example)
const regex8 = /\./g;

// Search for any word character
// ("\w" searches for any word characters (excludes for example whitespace, full stop, etc.))
const regex9 = /\w/g;

// Search for any non-word character
// ("\W" searches for any non-word characters (excludes for example whitespace, full stop, etc.))
const regex10 = /\W/g;

// Search for any whitespace
const regex11 = /\s/g;

// Search for any non-whitespace
const regex12 = /\S/g;

// Search for any word character that is at least 4 digits
// ({4} would include "mous" of the word "mouse")
const regex13 = /w{4}/g;

// Search for any word character that is at least 4 digits or more
// ({4,} would include "mouse" of the word "mouse")
const regex14 = /w{4,}/g;

// Search for any word character that is between 4 and 5 characters
// ({4,5} would include "street" of the word "streets")
const regex15 = /w{4,5}/g;

// Match anything that starts with either an "f" or a "c" and ends with "om"
// ("[ ]" is used to group things together)
const regex16 = /[fc]om/g;

// Match all characters between "a" and "z" in the alphabet
const regex17 = /[a-z]/g;

// Match all characters between "a" and "z" and between capital "A" and capital "Z" and between the numbers "0" and "9"
const regex18 = /[a-zA-Z0-9]/g;

// Match either lowercase "t" or uppercase "T" and then "he" afterwards
const regex19 = /(t|T)he/g;

// This would match "rere" and "rerere" but not "re" and only the first three iterations of "re" in "rererere"
const regex20 = /(re){2,3}/g;

// Searches for "S" in the first letter of a line
// (The "^"-sign indicates that it should search for, in this instance "S", in the beginning of the string.)
// This would be true for string1, but not for string2 or string3
const regex21 = /^S/g;

// The "m"-sign indicates that it should search line-by-line.
// This would be true for string1, String2 and string4 (This should work. Need better way to give example.)
const regex22 = /^T/gm;

// Matches any "." at the end of the string (not line-by-line)
// (The "$"-sign does the opposite of "^" and searches at the very end of the string)
const regex23 = /\.$/g;

// An example of a regex for an email.
// Rule nr. 1: minimum 1 character either from a-z or a number from 0-9. There is no maximum amount of repetition
// Rule nr. 2: After rule number 1, a "@" has to be intered
// Rule nr. 3: After rule number 2, at least 1 character between a-z has to be entered. No maximum of repetition
// Rule nr. 4: After rule number 3, a "." has to be entered
// Rule nr. 5: After rule number 4, at least 2 characters between a-z have to be entered
// Rule nr. 6 (optional): After rule number 5, a "." can be entered
// Rule nr. 7 (optional): After rule number 6, at least 2 characters between a-z can be entered
// Rule 6 and 7 has been added because some URLs does not stop after ".com", but may be ".co.uk". This regex takes that into consideration as well.
const email_regex =
  /([a-z0-9]{1,})+@+([a-z]{1,})+\.+([a-z)]{2,})+\.?([a-z]{2,})?/gi;

const isExisting1 = regex1.test(string1);
console.log("Result of isExisting1: " + isExisting1);

const isExisting2 = regex2.test(string1);
console.log("Result of isExisting2: " + isExisting2);

const isExisting3 = regex3.test(string1);
console.log("Result of isExisting3: " + isExisting3);

const isExisting4 = regex4.test(string2);
console.log("Result of isExisting4: " + isExisting4);

const isExisting5 = regex22.test(string4);
console.log("Result of isExisting5: " + isExisting5);

const emailValidation = email_regex.test(emailExample);
console.log("Email validation was successful. Verdict: " + emailValidation);
