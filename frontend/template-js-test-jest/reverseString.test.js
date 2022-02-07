const reverseString = require("./reverseString");

// Check if the "reverseString" function exists with "toBeDefined".
test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

test("String reverses", () => {
  expect(reverseString("hello")).toEqual("olleh");
});
