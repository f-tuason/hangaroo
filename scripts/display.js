/*
  function for initializing the Win/Lose Div
  4 columns
*/

function initMissed() {
  let parent = document.querySelector("#missed");

  parent.innerHTML = "";

  for (let i = 0; i < checkLetter.length; i++) {
    let img = document.createElement("img");
    img.src =
      "img\\" + (checkLetter[i] == 0 ? "incorrect" : "correct") + ".png";
    img.style.width = "48px";
    parent.append(img);
  }
}

/*
  function for initializing the Game Arena Div
  (where the answers are displayed)
*/

function initArena() {
  for (let r = 0; r < ROWS; r++) {
    let parent = document.querySelector("#row" + r);

    parent.innerHTML = "";

    for (let c = 0; c < COLS; c++) {
      let div = document.createElement("div");
      div.className = "rc";
      div.id = "r" + r + "c" + c;
      parent.append(div);
    }
  }
}

/*
  function for initializing the Game Arena Div
  (where the answers are displayed)
*/

function initWins() {
  let parent = document.querySelector("#wins");

  parent.innerHTML = "";

  for (let i = 0; i < winLose.length; i++) {
    let img = document.createElement("img");
    img.src = "img\\" + (winLose[i] == 0 ? "lose" : "win") + ".png";
    img.style.width = "48px";
    parent.append(img);
  }
}

/*
  function for initializing the Keyboard Div
*/

function initKeyboard(row) {
  let kbSet = row == 1 ? "abcdefghijklm" : "nopqrstuvwxyz";
  let parent = document.querySelector("#keyboard" + row);

  parent.innerHTML = "";

  for (let letterIndex = 0; letterIndex < kbSet.length; letterIndex++) {
    let img = document.createElement("img");
    let letter = kbSet[letterIndex];
    img.src = "img\\" + letter + ".png";
    img.alt = letter;
    img.style.width = "47px";
    img.className = "key";
    img.id = "keyid" + letter;
    parent.append(img);
  }
}

/*
  function for initializing the Category Div
*/

function initCategory(category) {
  let parent = document.querySelector("#category");
  parent.innerHTML = "";
  parent.textContent = category.toUpperCase();
}

/*
  function for initializing all the game data and divs
*/

function init() {
  initKeyboard(1);
  initKeyboard(2);
  initMissed();
  initWins();
  initArena();
}
