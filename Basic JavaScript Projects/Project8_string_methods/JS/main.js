function slice() {
  var sliceThis = ` I can write very good code! `;
  var newSlicedString = sliceThis.slice(0, 7);

  document.getElementById("slice").innerHTML += newSlicedString;
}

function toUppercase() {
  var name = "Linas";
  var convertToUpperCase = `${name}`;
  var convertedToUpperCase = convertToUpperCase.toUpperCase();
  document.getElementById(
    "to-uppercase"
  ).innerHTML += `<p> my name is ${convertedToUpperCase}</p>`;
}

function numberToString() {
  var numberToReturn = 25;
  var returnedNumberToString = numberToReturn.toString();

  document.getElementById(
    "toString"
  ).innerHTML += ` <p> ${typeof returnedNumberToString} ${returnedNumberToString} </p> `;
}

function toPrecision() {
  var numberToReturn = 21093.73982467983654;

  document.getElementById(
    "to-precision"
  ).innerHTML += ` <p>${numberToReturn.toPrecision(100)}</p> `;
}

function toFixed(floatNumber, n) {
  floatNumber = 56.896868;
  n = floatNumber.toFixed(2);
  document.getElementById("to-fixed").innerHTML += ` <p>${n}</p> `;
}

function valueF() {
  var number = 72976.7575765;
  var p = number.valueOf();
  document.getElementById("valueOf").innerHTML += ` <p>${p}</p> `;
};
