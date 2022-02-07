// Jest will automatically pick up that the "functions.test.js" relates to "functions.js" because of the naming convention.

// Reached 29:30 in the first video.

const functions = require("./functions");

// "toBe" is used for primitive types
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// "toBeNull" is specific. If the value returned was "Undefined" instead of null, the test would not pass.
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// The test passes if any falsy value is returned such as "undefined", "null", etc.. But a truthy value such as "4" would not pass the test.
// The falsy values are the following: "Undefined", "null", "NaN", "0" and an empty string ("").
test("Should be falsy", () => {
  expect(functions.checkValue1(NaN)).toBeFalsy();
});

// "toBeTruthy" is just the opposite of "toBeFalsy"
test("Should be truthy", () => {
  expect(functions.checkValue2(4)).toBeTruthy();
});

// "toEqual" is for non-primitive types, such as objects or arrays
test("User should be Bob Bobbison object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Bob",
    lastName: "Bobbison",
  });
});

// I wrote the next few tests internally in this file. But it would be the same concept as all the other examples.
// Less than and great than
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Greater than or equal
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeGreaterThanOrEqual(1600);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test("There is an E in team", () => {
  expect("team").toMatch(/E/i);
});

// Arrays
// "toContain" searched for something specific in the array.
test("Admin should be in username", () => {
  usernames = ["John", "Karen", "admin"];
  expect(usernames).toContain("admin");
});

// Working with async data
// "assertions()" verifies that a certain number of assertions are called (which in this case is 1), ->
// which is used when testing async code, ->
// to make sure that the assertions in a callback ->
// (or in this case, a .then and a promise) actually gets called.
test("User fetched named should be Leanne Graham (non-Async-Await)", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// Async Await
test("User fetched named should be Leanne Graham (Async-Await)", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
