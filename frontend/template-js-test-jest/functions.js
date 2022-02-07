const { default: axios } = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  /* The older/longer way of writing the same function.
  add: function(num1, num2) {
      return num1 + num2;
  }
  */

  isNull: () => null,
  checkValue1: (x) => x,
  checkValue2: (y) => y,
  createUser: () => {
    const user = { firstName: "Bob" };
    user["lastName"] = "Bobbison";
    return user;
  },
  // The "/1" at the end of the url limits the search result to 1 user (instead of 100 users, which you would get by removing it)
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "error"),
};

module.exports = functions;
