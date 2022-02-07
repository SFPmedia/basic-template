const isAnagram = require("./anagram");

test("Does isAnagram function exist?", () => {
  expect(typeof isAnagram).toEqual("function");
});

test("'kevlar' is an anagram of 'lekvar'", () => {
  expect(isAnagram("kevlar", "lekvar")).toBeTruthy();
});

test("'Keisar' is not an anagram of 'Jimmey'", () => {
  expect(isAnagram("Hello", "")).toBeFalsy();
});
