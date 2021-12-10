/*
  first function
  get a random question from the questions object array

  second function
  convert question.answer to [], which has limit of 14 COLS

  third function
  convert the [] of question into an object array normalize
  which have letter and ident properties
*/

function getRandomQuestion() {
  // first function
  let idx = Math.floor(Math.random() * questions.length);
  let questn = questions.splice(idx, 1);
  let question = {
    group: questn[0].group,
    category: questn[0].category,
    answer: questn[0].answer,
    trivia: questn[0].trivia,
  };

  question.answer = question.answer.toLowerCase();

  // second function
  let ans = question.answer;
  let words = ans.split(" ");
  let normalize = [];
  let sentence = "";
  let oldsentence = "";

  for (let i = 0; i < words.length; i++) {
    sentence += words[i] + " ";
    if (sentence.length > COLS) {
      normalize.push(oldsentence.trim());
      sentence = words[i] + " ";
    }
    oldsentence = sentence;
  }

  if (oldsentence.length > 0) {
    normalize.push(oldsentence.trim());
  }

  // third function
  let startRow = 0;
  let colstart = Math.floor(COLS / 2);

  if (normalize.length < 3) {
    startRow = 1;
  }

  for (let r = 0; r < normalize.length; r++) {
    let col = colstart - Math.floor(normalize[r].length / 2);

    for (let c = 0; c < normalize[r].length; c++) {
      items.push({
        letter: normalize[r][c],
        ident: "r" + (startRow + r) + "c" + (col + c),
      });
    }
  }

  for (item of items) {
    let div = document.querySelector("#" + item.ident);
    let displayLetter = true;

    switch (item.letter) {
      case " ":
      case "(":
      case ")":
      case "'":
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        displayLetter = false;
        break;
    }

    if (displayLetter) {
      div.style.backgroundColor = "blue";
    }
  }

  return question;
}
