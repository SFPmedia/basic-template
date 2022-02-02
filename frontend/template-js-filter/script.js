/*
  NOTE: I tried to import the data from a "data.js"-file, however the import/require keyword 
  runs into an issue with new ECMA6 standards regarding it being run outside of a "module".
  I tried solving this issue, but I failed and will need to look further into this.
  A later update might come.
*/

var data = [
  {
    id: 0,
    name: "Bobby",
    English: 35,
    Maths: 93,
    Science: 45,
    SocialScience: 99,
  },
  {
    id: 1,
    name: "Joe",
    English: 75,
    Maths: 94,
    Science: 65,
    SocialScience: 34,
  },
  {
    id: 2,
    name: "Vanessa",
    English: 83,
    Maths: 86,
    Science: 38,
    SocialScience: 28,
  },
  {
    id: 3,
    name: "Rebecca",
    English: 62,
    Maths: 62,
    Science: 99,
    SocialScience: 78,
  },
  {
    id: 4,
    name: "Olaf",
    English: 86,
    Maths: 92,
    Science: 73,
    SocialScience: 15,
  },
];

//import data from ("./data2.json");
//import data from "./data2.json" assert { type: "json" };
//import data from "./data2.json";
//console.log(data);

function onPageLoad() {
  let table = document.getElementById("studentData");
  let arrayLength = data.length;

  console.log(arrayLength);
  console.log(data[0].id);

  for (let i = 0; i < arrayLength; i++) {
    let row = table.insertRow(-1);
    row.insertCell(0).innerHTML = i + 1;
    row.insertCell(1).innerHTML = data[i].name;
    row.insertCell(2).innerHTML = data[i].English;
    row.insertCell(3).innerHTML = data[i].Maths;
    row.insertCell(4).innerHTML = data[i].Science;
    row.insertCell(5).innerHTML = data[i].SocialScience;
  }
}

function filterBy() {
  let table = document.getElementById("studentData");
  let arrayLength = data.length;

  let options = document.getElementById("subjects").options;
  let selectedSubject = options[options.selectedIndex].id;
  let subject = document.getElementById("subjects").value;

  let mark = document.getElementById("mark").value;
  let maxMark = document.getElementById("maxMark").value;

  let inputValueAbove = document.getElementById("above").checked;
  let inputValueBelow = document.getElementById("below").checked;
  let inputValueBetween = document.getElementById("between").checked;

  console.log(selectedSubject);
  console.log(subject);
  console.log(mark);
  console.log(inputValueAbove);
  console.log(inputValueBelow);
  console.log(inputValueBetween);

  table.innerHTML = "";

  for (let i = 0; i < arrayLength; i++) {
    // Above
    if (inputValueAbove === true) {
      document.getElementById("to").style.display = "none";
      document.getElementById("maxMark").style.display = "none";

      if (subject == "English" && data[i].English >= mark) {
        let row = table.insertRow(-1);
        let j = document.getElementsByTagName("TR").length - 1;
        row.insertCell(0).innerHTML = j;
        row.insertCell(1).innerHTML = data[i].name;
        row.insertCell(2).innerHTML = data[i].English;
        row.insertCell(3).innerHTML = data[i].Maths;
        row.insertCell(4).innerHTML = data[i].Science;
        row.insertCell(5).innerHTML = data[i].SocialScience;
        console.log(document.getElementsByTagName("TR").length);
      } else if (subject == "Maths" && data[i].Maths >= mark) {
        let row = table.insertRow(-1);
        let j = document.getElementsByTagName("TR").length - 1;
        row.insertCell(0).innerHTML = j;
        row.insertCell(1).innerHTML = data[i].name;
        row.insertCell(2).innerHTML = data[i].English;
        row.insertCell(3).innerHTML = data[i].Maths;
        row.insertCell(4).innerHTML = data[i].Science;
        row.insertCell(5).innerHTML = data[i].SocialScience;
        console.log(document.getElementsByTagName("TR").length);
      } else if (subject == "Science" && data[i].Science >= mark) {
        let row = table.insertRow(-1);
        let j = document.getElementsByTagName("TR").length - 1;
        row.insertCell(0).innerHTML = j;
        row.insertCell(1).innerHTML = data[i].name;
        row.insertCell(2).innerHTML = data[i].English;
        row.insertCell(3).innerHTML = data[i].Maths;
        row.insertCell(4).innerHTML = data[i].Science;
        row.insertCell(5).innerHTML = data[i].SocialScience;
        console.log(document.getElementsByTagName("TR").length);
      } else if (subject == "SocialScience" && data[i].SocialScience >= mark) {
        let row = table.insertRow(-1);
        let j = document.getElementsByTagName("TR").length - 1;
        row.insertCell(0).innerHTML = j;
        row.insertCell(1).innerHTML = data[i].name;
        row.insertCell(2).innerHTML = data[i].English;
        row.insertCell(3).innerHTML = data[i].Maths;
        row.insertCell(4).innerHTML = data[i].Science;
        row.insertCell(5).innerHTML = data[i].SocialScience;
        console.log(document.getElementsByTagName("TR").length);
      } else {
        console.log("This is not the data you are looking for");
      }
    }

    // Below
    if (inputValueBelow === true) {
      document.getElementById("to").style.display = "none";
      document.getElementById("maxMark").style.display = "none";

      if (subject == "English" && data[i].English < mark) {
        let row = table.insertRow(-1);
        let j = document.getElementsByTagName("TR").length - 1;
        row.insertCell(0).innerHTML = j;
        row.insertCell(1).innerHTML = data[i].name;
        row.insertCell(2).innerHTML = data[i].English;
        row.insertCell(3).innerHTML = data[i].Maths;
        row.insertCell(4).innerHTML = data[i].Science;
        row.insertCell(5).innerHTML = data[i].SocialScience;
        console.log(document.getElementsByTagName("TR").length);
      } else if (subject == "Maths" && data[i].Maths < mark) {
        let row = table.insertRow(-1);
        let j = document.getElementsByTagName("TR").length - 1;
        row.insertCell(0).innerHTML = j;
        row.insertCell(1).innerHTML = data[i].name;
        row.insertCell(2).innerHTML = data[i].English;
        row.insertCell(3).innerHTML = data[i].Maths;
        row.insertCell(4).innerHTML = data[i].Science;
        row.insertCell(5).innerHTML = data[i].SocialScience;
        console.log(document.getElementsByTagName("TR").length);
      } else if (subject == "Science" && data[i].Science < mark) {
        let row = table.insertRow(-1);
        let j = document.getElementsByTagName("TR").length - 1;
        row.insertCell(0).innerHTML = j;
        row.insertCell(1).innerHTML = data[i].name;
        row.insertCell(2).innerHTML = data[i].English;
        row.insertCell(3).innerHTML = data[i].Maths;
        row.insertCell(4).innerHTML = data[i].Science;
        row.insertCell(5).innerHTML = data[i].SocialScience;
        console.log(document.getElementsByTagName("TR").length);
      } else if (subject == "SocialScience" && data[i].SocialScience < mark) {
        let row = table.insertRow(-1);
        let j = document.getElementsByTagName("TR").length - 1;
        row.insertCell(0).innerHTML = j;
        row.insertCell(1).innerHTML = data[i].name;
        row.insertCell(2).innerHTML = data[i].English;
        row.insertCell(3).innerHTML = data[i].Maths;
        row.insertCell(4).innerHTML = data[i].Science;
        row.insertCell(5).innerHTML = data[i].SocialScience;
        console.log(document.getElementsByTagName("TR").length);
      } else {
        console.log("This is not the data you are looking for");
      }
    }

    // Between
    if (inputValueBetween === true) {
      document.getElementById("to").style.display = "inline-block";
      document.getElementById("maxMark").style.display = "inline-block";

      if (
        subject == "English" &&
        data[i].English > mark &&
        data[i].English < maxMark
      ) {
        let row = table.insertRow(-1);
        let j = document.getElementsByTagName("TR").length - 1;
        row.insertCell(0).innerHTML = j;
        row.insertCell(1).innerHTML = data[i].name;
        row.insertCell(2).innerHTML = data[i].English;
        row.insertCell(3).innerHTML = data[i].Maths;
        row.insertCell(4).innerHTML = data[i].Science;
        row.insertCell(5).innerHTML = data[i].SocialScience;
        console.log(document.getElementsByTagName("TR").length);
      } else if (
        subject == "Maths" &&
        data[i].Maths > mark &&
        data[i].Maths < maxMark
      ) {
        let row = table.insertRow(-1);
        let j = document.getElementsByTagName("TR").length - 1;
        row.insertCell(0).innerHTML = j;
        row.insertCell(1).innerHTML = data[i].name;
        row.insertCell(2).innerHTML = data[i].English;
        row.insertCell(3).innerHTML = data[i].Maths;
        row.insertCell(4).innerHTML = data[i].Science;
        row.insertCell(5).innerHTML = data[i].SocialScience;
        console.log(document.getElementsByTagName("TR").length);
      } else if (
        subject == "Science" &&
        data[i].Science > mark &&
        data[i].Science < maxMark
      ) {
        let row = table.insertRow(-1);
        let j = document.getElementsByTagName("TR").length - 1;
        row.insertCell(0).innerHTML = j;
        row.insertCell(1).innerHTML = data[i].name;
        row.insertCell(2).innerHTML = data[i].English;
        row.insertCell(3).innerHTML = data[i].Maths;
        row.insertCell(4).innerHTML = data[i].Science;
        row.insertCell(5).innerHTML = data[i].SocialScience;
        console.log(document.getElementsByTagName("TR").length);
      } else if (
        subject == "SocialScience" &&
        data[i].SocialScience > mark &&
        data[i].SocialScience < maxMark
      ) {
        let row = table.insertRow(-1);
        let j = document.getElementsByTagName("TR").length - 1;
        row.insertCell(0).innerHTML = j;
        row.insertCell(1).innerHTML = data[i].name;
        row.insertCell(2).innerHTML = data[i].English;
        row.insertCell(3).innerHTML = data[i].Maths;
        row.insertCell(4).innerHTML = data[i].Science;
        row.insertCell(5).innerHTML = data[i].SocialScience;
        console.log(document.getElementsByTagName("TR").length);
      } else {
        console.log("This is not the data you are looking for");
      }
    }
  }
}
function Clear() {
  document.getElementById("subjects").value =
    document.getElementById("opt0").value;
  document.getElementById("mark").value = "";
  document.getElementById("maxMark").value = "";
  document.getElementById("above").checked = true;
  document.getElementById("below").checked = false;
  document.getElementById("between").checked = false;
  document.getElementById("to").style.display = "none";
  document.getElementById("maxMark").style.display = "none";

  let table = document.getElementById("studentData");

  table.innerHTML = "";

  let row = table.insertRow(-1);
  let j = document.getElementById("TR").length - 1;
  row.insertCell(0).innerHTML = j;
  row.insertCell(1).innerHTML = data[i].name;
  row.insertCell(2).innerHTML = data[i].English;
  row.insertCell(3).innerHTML = data[i].Maths;
  row.insertCell(4).innerHTML = data[i].Science;
  row.insertCell(5).innerHTML = data[i].SocialScience;
}

function filterClick() {
  filterBy();

  // Enable this code to reset values.
  /*
  document.getElementById("subjects").value =
    document.getElementById("opt0").value;
  document.getElementById("mark").value = "";
  document.getElementById("maxMark").value = "";
  document.getElementById("above").checked = true;
  document.getElementById("below").checked = false;
  document.getElementById("between").checked = false;
  document.getElementById("to").style.display = "none";
  document.getElementById("maxMark").style.display = "none";
  */
}
