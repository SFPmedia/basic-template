var userTyped = document.getElementById("toDo");
var userTypedTitle = document.getElementById("cardTitle");
var numberOfDeletesCard1 = 0;
var numberOfDeletesCard2 = 0;
var numberOfDeletesCard3 = 0;

function selectCard(card) {
  let cardSelectionCheck1 = document.getElementById("card1Selected").checked;
  let cardSelectionCheck2 = document.getElementById("card2Selected").checked;
  let cardSelectionCheck3 = document.getElementById("card3Selected").checked;
  let deletedCheck = document.getElementById("delet").checked;

  if (cardSelectionCheck1 === true) {
    cardSelectionCheck1 == true;
    cardSelectionCheck2 == false;
    cardSelectionCheck3 == false;
  } else if (cardSelectionCheck2 === true) {
    cardSelectionCheck1 == false;
    cardSelectionCheck2 == true;
    cardSelectionCheck3 == false;
  } else if (cardSelectionCheck3 === true) {
    cardSelectionCheck1 == false;
    cardSelectionCheck2 == false;
    cardSelectionCheck3 == true;
  }

  if (
    cardSelectionCheck1 === true &&
    document.getElementById("editTitle").checked === true
  ) {
    document.getElementById("cardTitle").value =
      document.getElementById("cardOneTitle").innerHTML;
  } else if (
    cardSelectionCheck2 === true &&
    document.getElementById("editTitle").checked === true
  ) {
    document.getElementById("cardTitle").value =
      document.getElementById("cardOneTitle").innerHTML;
  } else if (
    cardSelectionCheck3 === true &&
    document.getElementById("editTitle").checked === true
  ) {
    document.getElementById("cardTitle").value =
      document.getElementById("cardOneTitle").innerHTML;
  }

  if (
    document.getElementById("card1Selected").checked == true &&
    deletedCheck === true
  ) {
    for (i = 0; i < document.getElementById("firstCardRow").length; i++) {
      if (document.getElementById("firstCardRow").length > 0) {
        document.getElementById("firstCardRow")[i].style.display = "block";
      }

      if (document.getElementById("secondCardRow").length > 0) {
        document.getElementById("secondCardRow")[i].style.display = "none";
      }

      if (document.getElementById("thirdCardRow").length > 0) {
        document.getElementById("thirdCardRow")[i].style.display = "none";
      }
    }
  }

  if (
    document.getElementById("card2Selected").checked == true &&
    deletedCheck === true
  ) {
    for (i = 0; i < document.getElementById("firstCardRow").length; i++) {
      if (document.getElementById("firstCardRow").length > 0) {
        document.getElementById("firstCardRow")[i].style.display = "none";
      }

      if (document.getElementById("secondCardRow").length > 0) {
        document.getElementById("secondCardRow")[i].style.display = "block";
      }

      if (document.getElementById("thirdCardRow").length > 0) {
        document.getElementById("thirdCardRow")[i].style.display = "none";
      }
    }
  }

  if (
    document.getElementById("card3Selected").checked == true &&
    deletedCheck === true
  ) {
    for (i = 0; i < document.getElementById("firstCardRow").length; i++) {
      if (document.getElementById("firstCardRow").length > 0) {
        document.getElementById("firstCardRow")[i].style.display = "none";
      }

      if (document.getElementById("secondCardRow").length > 0) {
        document.getElementById("secondCardRow")[i].style.display = "none";
      }

      if (document.getElementById("thirdCardRow").length > 0) {
        document.getElementById("thirdCardRow")[i].style.display = "block";
      }
    }
  }
}

function addToDo() {
  let cardSelectionCheck1 = document.getElementById("card1Selected").checked;
  let cardSelectionCheck2 = document.getElementById("card2Selected").checked;
  let cardSelectionCheck3 = document.getElementById("card3Selected").checked;
  let addToDoCheck = document.getElementById("addToDo").checked;

  var list = document.createElement("UL");
  var node = document.createElement("LI");
  var deleteNode = document.createElement("button");
  deleteNode.innerHTML = "X";
  deleteNode.onclick = "deleteToDo(this)";

  var textNode = document.createTextNode(userTyped.value);

  if (document.getElementById("toDo").value !== "") {
    if (addToDoCheck === true && cardSelectionCheck1 === true) {
      list.appendChild(node);
      node.appendChild(textNode);
      document.getElementById("selectedCard1").appendChild(list);

      var deleteButton = document.createElement("button");

      deleteButton.innerHTML = "X";
      deleteButton.addEventListener("click", deleteToDo);
      numberOfDeletesCard1 = numberOfDeletesCard1 + 1;
      deleteButton.id = "deleteBtn" + numberOfDeletesCard1;
      deleteButton.className = "firstCardRow";
      document.getElementById("selectedCard1").appendChild(deleteButton);
    } else if (addToDoCheck === true && cardSelectionCheck2 === true) {
      list.appendChild(node);
      node.appendChild(textNode);
      document.getElementById("selectedCard2").appendChild(list);

      var deleteButton = document.createElement("button");

      deleteButton.innerHTML = "X";
      deleteButton.addEventListener("click", deleteToDo);
      numberOfDeletesCard2 = numberOfDeletesCard2 + 1;
      deleteButton.id = "deleteBtn" + numberOfDeletesCard2;
      deleteButton.className = "secondCardRow";
      document.getElementById("selectedCard2").appendChild(deleteButton);
    } else if (addToDoCheck === true && cardSelectionCheck3 === true) {
      list.appendChild(node);
      node.appendChild(textNode);
      document.getElementById("selectedCard3").appendChild(list);

      var deleteButton = document.createElement("button");

      deleteButton.innerHTML = "X";
      deleteButton.addEventListener("click", deleteToDo);
      numberOfDeletesCard3 = numberOfDeletesCard3 + 1;
      deleteButton.id = "deleteBtn" + numberOfDeletesCard3;
      deleteButton.className = "thirdCardRow";
      document.getElementById("selectedCard3").appendChild(deleteButton);
    }
  }

  document.getElementById("toDo").value = "";
}

function deleteToDo() {
  const card1Parent = document.getElementById("selectedCard1");
  const card2Parent = document.getElementById("selectedCard2");
  const card3Parent = document.getElementById("selectedCard3");

  if (this.className === "firstCardRow") {
    for (i = 0; i < card1Parent.children.length; i++) {
      if (card1Parent.children[i].id === this.id) {
        card1Parent.removeChild(card1Parent.childNodes[2 + i]);
        card1Parent.removeChild(card1Parent.childNodes[2 + i]);
      }
    }
  }
  if (this.className === "secondCardRow") {
    for (i = 0; i < card2Parent.children.length; i++) {
      if (card2Parent.children[i].id === this.id) {
        card2Parent.removeChild(card2Parent.childNodes[2 + i]);
        card2Parent.removeChild(card2Parent.childNodes[2 + i]);
      }
    }
  }
  if (this.className === "thirdCardRow") {
    for (i = 0; i < card3Parent.children.length; i++) {
      if (card3Parent.children[i].id === this.id) {
        card3Parent.removeChild(card3Parent.childNodes[2 + i]);
        card3Parent.removeChild(card3Parent.childNodes[2 + i]);
      }
    }
  }
}

function change() {
  let cardSelectionCheck1 = document.getElementById("card1Selected").checked;
  let cardSelectionCheck2 = document.getElementById("card2Selected").checked;
  let cardSelectionCheck3 = document.getElementById("card3Selected").checked;
  let titleChangeCheck = document.getElementById("editTitle").checked;

  let userTypedTitle = document.getElementById("cardTitle");

  if (userTypedTitle.value !== "") {
    if (titleChangeCheck === true && cardSelectionCheck1 === true) {
      document.getElementById("cardOneTitle").innerText = userTypedTitle.value;
    } else if (titleChangeCheck === true && cardSelectionCheck2 === true) {
      document.getElementById("cardTwoTitle").innerText = userTypedTitle.value;
    } else if (titleChangeCheck === true && cardSelectionCheck3 === true) {
      document.getElementById("cardThreeTitle").innerText =
        userTypedTitle.value;
    }
  }
}

function clearToDoList() {
  const card1Parent = document.getElementById("selectedCard1");
  const card2Parent = document.getElementById("selectedCard2");
  const card3Parent = document.getElementById("selectedCard3");

  while (card1Parent.lastChild) {
    if (card1Parent.children.length != 2) {
      card1Parent.lastChild.remove();
    } else {
      break;
    }
  }
  while (card2Parent.lastChild) {
    if (card2Parent.children.length != 2) {
      card2Parent.lastChild.remove();
    } else {
      break;
    }
  }
  while (card3Parent.lastChild) {
    if (card3Parent.children.length != 2) {
      card3Parent.lastChild.remove();
    } else {
      break;
    }
  }
}

function changeMode() {
  let addingToDoCheck = document.getElementById("addToDo").checked;
  let editTitleCheck = document.getElementById("editTitle").checked;
  let deleteCheck = document.getElementById("delete").checked;

  let cardSelectionCheck1 = document.getElementById("card1Selected").checked;
  let cardSelectionCheck2 = document.getElementById("card2Selected").checked;
  let cardSelectionCheck3 = document.getElementById("card3Selected").checked;

  if (addingToDoCheck === true) {
    document.getElementById("add").style.display = "block";
    document.getElementById("edit").style.display = "none";

    for (
      i = 0;
      i < document.getElementsByClassName("firstCardRow").length;
      i++
    ) {
      document.getElementsByClassName("firstCardRow")[i].style.display = "none";
    }
    for (
      i = 0;
      i < document.getElementsByClassName("secondCardRow").length;
      i++
    ) {
      document.getElementsByClassName("secondCardRow")[i].style.display =
        "none";
    }
    for (
      i = 0;
      i < document.getElementsByClassName("thirdCardRow").length;
      i++
    ) {
      document.getElementsByClassName("thirdCardRow")[i].style.display = "none";
    }
  } else if (editTitleCheck === true) {
    document.getElementById("add").style.display = "none";
    document.getElementById("edit").style.display = "block";

    for (
      i = 0;
      i < document.getElementsByClassName("firstCardRow").length;
      i++
    ) {
      document.getElementsByClassName("firstCardRow")[i].style.display = "none";
    }
    for (
      i = 0;
      i < document.getElementsByClassName("secondCardRow").length;
      i++
    ) {
      document.getElementsByClassName("secondCardRow")[i].style.display =
        "none";
    }
    for (
      i = 0;
      i < document.getElementsByClassName("thirdCardRow").length;
      i++
    ) {
      document.getElementsByClassName("thirdCardRow")[i].style.display = "none";
    }
    if (cardSelectionCheck1 === true) {
      document.getElementById("cardTitle").value =
        document.getElementById("cardOneTitle").innerHTML;
    } else if (cardSelectionCheck2 === true) {
      document.getElementById("cardTitle").value =
        document.getElementById("cardTwoTitle").innerHTML;
    } else if (cardSelectionCheck3 === true) {
      document.getElementById("cardTitle").value =
        document.getElementById("cardThreeTitle").innerHTML;
    }
  } else if (deleteCheck === true) {
    document.getElementById("add").style.display = "none";
    document.getElementById("edit").style.display = "none";

    for (
      i = 0;
      i < document.getElementsByClassName("firstCardRow").length;
      i++
    ) {
      document.getElementsByClassName("firstCardRow")[i].style.display =
        "block";
    }
    for (
      i = 0;
      i < document.getElementsByClassName("secondCardRow").length;
      i++
    ) {
      document.getElementsByClassName("secondCardRow")[i].style.display =
        "block";
    }
    for (
      i = 0;
      i < document.getElementsByClassName("thirdCardRow").length;
      i++
    ) {
      document.getElementsByClassName("thirdCardRow")[i].style.display =
        "block";
    }
  }
}
