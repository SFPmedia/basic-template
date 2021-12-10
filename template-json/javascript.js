var returnData = () => {
  const data = require("./data.json");
  const persons = data.persons;
  const theOthers = data.someoneElse[1].Name;

  console.log(theOthers);

  for (let iKey of Object.keys(data)) {
    var j = data[iKey];
    console.log(iKey, j);
  }
};

return returnData();
