var returnData = () => {
  const data = require("./data.json");
  const dataArray = require("./data-array.json");
  const persons = data.persons;
  const theOthers = data.someoneElse[1].Name;

  console.log(theOthers);
  console.log(dataArray);

  for (let iKey of Object.keys(data)) {
    var j = data[iKey];
    console.log(iKey, j);
  }

  dataArray.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      console.log(`${key} ${value}`);
    });
    console.log(obj);
  });
};

return returnData();
