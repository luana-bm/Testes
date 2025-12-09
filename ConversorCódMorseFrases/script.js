var InputTextArea = document.getElementById("morseTextArea");
var OutputTextArea = document.getElementById("textArea");
var translateButton = document.querySelector(".translateBtn");
var input = InputTextArea.value.toString("");
var isInputMorse = true;
var swapBtn = document.getElementById("swapBtn");
let secretCount = parseInt(document.getElementById("count").innerHTML, 10);

var morseRef = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-.-..": "Ç",
  "-..": "D",
  ".": "E",
  "..-..": "É",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "--.--": "Ñ",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "..--": "Ü",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "/": " ",
  "--..--": ",",
  "..--..": "?",
  "-.-.-.": ";",
  "---...": ":",
  "-....-": "-",
  "-..-.": "/",
  ".----.": "'",
  "-.-.--": "!",
};

var reversedMorseRef = {};

for (var key in morseRef) {
  if (morseRef.hasOwnProperty(key)) {
    reversedMorseRef[String(morseRef[key])] = key;
  }
}

console.log(morseRef);

console.log(reversedMorseRef);

function checkIfValid() {
  input = InputTextArea.value.toString("");
  if (isInputMorse && input.match(/[a-zA-Z0-9_@#$%^&*()]/g) === null) {
    morseToText();
    return console.log(input.split(" "));
  }
  if (!isInputMorse) {
    textToMorse();
    return console.log(input.split(" "));
  } else {
    InputTextArea.value = "";
  }
}

function morseToText() {
    let str = input
    .split(" ")
    .map((code) => morseRef[code])
    .join("");
    OutputTextArea.value = str;
    console.log(str);
    lookForSecrets();
    
}

//secretos//
function lookForSecrets() {
  if (document.body.classList.contains('sos') === false && input.split(" ").map((code) => morseRef[code]).join("") === ("SOS")) {
    document.body.classList.add('sos');
    secretCount++;
    document.getElementById("count").innerHTML = secretCount;
  }
  if (document.body.classList.contains('classic') === false && input.split(" ").map((code) => morseRef[code]).join("") === ("WHAT HATH GOD WROUGHT")) {
    document.body.classList.add('classic')
    secretCount++;
    document.getElementById("count").innerHTML = secretCount;

  }
  if (document.body.classList.contains('military') === false && input.split(" ").map((code) => morseRef[code]).join("") === ("TORTURE")) {
    document.body.classList.add('military');
    secretCount++;
    document.getElementById("count").innerHTML = secretCount;

  }
}

function textToMorse() {
  let textStr = input
    .toUpperCase()
    .split("")
    .map((text) => reversedMorseRef[text])
    .join(" ");
  OutputTextArea.value = textStr;
  console.log(textStr);
}

translateButton.addEventListener("click", checkIfValid);

swapBtn.addEventListener("click", () => {
  isInputMorse = !isInputMorse;
  OutputTextArea.value = "";
  InputTextArea.value = "";
  if (!isInputMorse) {
    InputTextArea.setAttribute("placeholder", "Texto(Entrada)");
    OutputTextArea.setAttribute("placeholder", "Morse(Saída)");
  } else {
    InputTextArea.setAttribute("placeholder", "Morse(Entrada)");
    OutputTextArea.setAttribute("placeholder", "Texto(Saída)");
  }
});
