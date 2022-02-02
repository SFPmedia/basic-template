var returnData = () => {
  const data = require("./data.json");

  var stringify = JSON.stringify(data);
  var parse = JSON.parse(stringify);

  console.log("Stringify output:");
  console.log(stringify);

  console.log("Parse output:");
  console.log(parse);

  console.log("Parse output specified:");
  console.log(parse.someoneElse[0].Company);
};

return returnData();
