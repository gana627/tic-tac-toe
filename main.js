function startGame() {
  for (var i = 1; i <= 9; i++) {
    clearbox(i);
  }
  document.turn = "X";
  document.winner = null;
  setMessege(document.turn + " get to start.");
}

function nextMove(square) {
  if (document.winner != null) {
    setMessege(document.turn + " already won!");
  } else if (square.innerText == "") {
    square.innerText = document.turn;
    switchTurn();
  } else {
    setMessege("Pick another square.");
  }
}

function switchTurn() {
  if (checkWInner(document.turn)) {
    setMessege("Congrats " + document.turn + " you won");
    document.winner = document.turn;
  } else if (document.turn == "X") {
    document.turn = "O";
    setMessege(document.turn + "'s turn");
  } else {
    document.turn = "X";
    setMessege(document.turn + "'s turn");
  }
}

function setMessege(msg) {
  document.getElementById("messege").innerText = msg;
}

function getBox(number) {
  return document.getElementById("s" + number).innerText;
}

function checkRow(a, b, c, move) {
  var result = false;
  if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
    result = true;
  }
  return result;
}

function checkWInner(move) {
  var result = false;

  if (
    checkRow(1, 2, 3, move) ||
    checkRow(4, 5, 6, move) ||
    checkRow(7, 8, 9, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(3, 6, 9, move) ||
    checkRow(1, 5, 9, move) ||
    checkRow(3, 5, 7, move)
  ) {
    result = true;
  }
  return result;
}

function clearbox(number) {
  document.getElementById("s" + number).innerText = "";
}

