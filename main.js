// var elFormInput = document.querySelector(".form-input");
// var elForm = document.querySelector(".form");
// var elParagraph = document.querySelector(".paragraph");

var newArray;
var arrey = [];
numberToString("223352436");
function numberToString(a) {
  a = Math.round(a);
  console.log(a);
  a = String(a);
  var result;
  newArray = a.split("");
  for (var number in newArray) {
    arrey.push(newArray[number]);
  }

  console.log(arrey);
  switch (arrey[arrey.length - 1]) {
    case "1":
      result = "Bir";
      break;
    case "2":
      result = "Ikki";
      break;
    case "3":
      result = "Uch";
      break;
    case "4":
      result = "To'rt";
      break;
    case "5":
      result = "Besh";
      break;
    case "6":
      result = "Olti";
      break;
    case "7":
      result = "Yetti";
      break;
    case "8":
      result = "Sakkiz";
      break;
    case "9":
      result = "To'qqiz";
      break;
    case "0":
      result = "";
      break;
  }

  switch (arrey[arrey.length - 2]) {
    case "1":
      result = "O'n " + result;
      break;
    case "2":
      result = "Yigirma " + result;
      break;
    case "3":
      result = "O'ttiz " + result;
      break;
    case "4":
      result = "Qirq " + result;
      break;
    case "5":
      result = "Ellik " + result;
      break;
    case "6":
      result = "Oltmish " + result;
      break;
    case "7":
      result = "Yetmish " + result;
      break;
    case "8":
      result = "Sakson " + result;
      break;
    case "9":
      result = "To'qson " + result;
      break;
    case "0":
      result = "" + result;
      break;
  }
  switch (arrey[arrey.length - 3]) {
    case "1":
      result = "Bir yuz " + result;
      break;
    case "2":
      result = "Ikki yuz " + result;
      break;
    case "3":
      result = "Uch yuz " + result;
      break;
    case "4":
      result = "To'rt yuz " + result;
      break;
    case "5":
      result = "Besh yuz " + result;
      break;
    case "6":
      result = "Oltiyuz " + result;
      break;
    case "7":
      result = "Yetti yuz " + result;
      break;
    case "8":
      result = "Sakkiz yuz " + result;
      break;
    case "9":
      result = "To'qqiz yuz " + result;
      break;
    case "0":
      result = "" + result;
      break;
  }

  if (arrey[arrey.length - 4] == "0") {
    if (arrey[arrey.length - 5] == "0") {
      if (arrey[arrey.length - 6] == "0") {
        console.log("ming");
      } else {
        result = "ming " + result;
      }
    } else {
      result = "ming " + result;
    }
  } else {
    result = "ming " + result;
  }

  switch (arrey[arrey.length - 4]) {
    case "1":
      result = "Bir " + result;
      break;
    case "2":
      result = "Ikki " + result;
      break;
    case "3":
      result = "Uch " + result;
      break;
    case "4":
      result = "To'rt " + result;
      break;
    case "5":
      result = "Besh " + result;
      break;
    case "6":
      result = "Olti " + result;
      break;
    case "7":
      result = "Yetti " + result;
      break;
    case "8":
      result = "Sakkiz " + result;
      break;
    case "9":
      result = "To'qqiz " + result;
      break;
    case "0":
      result = "" + result;
      break;
  }

  switch (arrey[arrey.length - 5]) {
    case "1":
      result = "O'n " + result;
      break;
    case "2":
      result = "Yigirma " + result;
      break;
    case "3":
      result = "O'ttiz " + result;
      break;
    case "4":
      result = "Qirq " + result;
      break;
    case "5":
      result = "Ellik " + result;
      break;
    case "6":
      result = "Oltmish " + result;
      break;
    case "7":
      result = "Yetmish " + result;
      break;
    case "8":
      result = "Sakson " + result;
      break;
    case "9":
      result = "To'qson " + result;
      break;
    case "0":
      result = "" + result;
      break;
  }

  switch (arrey[arrey.length - 6]) {
    case "1":
      result = "Bir yuz " + result;
      break;
    case "2":
      result = "Ikki yuz " + result;
      break;
    case "3":
      result = "Uch yuz " + result;
      break;
    case "4":
      result = "To'rt yuz " + result;
      break;
    case "5":
      result = "Besh yuz " + result;
      break;
    case "6":
      result = "Oltiyuz " + result;
      break;
    case "7":
      result = "Yetti yuz " + result;
      break;
    case "8":
      result = "Sakkiz yuz " + result;
      break;
    case "9":
      result = "To'qqiz yuz " + result;
      break;
    case "0":
      result = "" + result;
      break;
  }

  result = "million " + result;

  switch (arrey[arrey.length - 7]) {
    case "1":
      result = "Bir " + result;
      break;
    case "2":
      result = "Ikki " + result;
      break;
    case "3":
      result = "Uch " + result;
      break;
    case "4":
      result = "To'rt " + result;
      break;
    case "5":
      result = "Besh " + result;
      break;
    case "6":
      result = "Olti " + result;
      break;
    case "7":
      result = "Yetti " + result;
      break;
    case "8":
      result = "Sakkiz " + result;
      break;
    case "9":
      result = "To'qqiz " + result;
      break;
    case "0":
      result = "" + result;
      break;
  }

  switch (arrey[arrey.length - 8]) {
    case "1":
      result = "O'n " + result;
      break;
    case "2":
      result = "Yigirma " + result;
      break;
    case "3":
      result = "O'ttiz " + result;
      break;
    case "4":
      result = "Qirq " + result;
      break;
    case "5":
      result = "Ellik " + result;
      break;
    case "6":
      result = "Oltmish " + result;
      break;
    case "7":
      result = "Yetmish " + result;
      break;
    case "8":
      result = "Sakson " + result;
      break;
    case "9":
      result = "To'qson " + result;
      break;
    case "0":
      result = "" + result;
      break;
  }

  switch (arrey[arrey.length - 9]) {
    case "1":
      result = "yuz " + result;
      break;
    case "2":
      result = "Ikki yuz " + result;
      break;
    case "3":
      result = "Uch yuz " + result;
      break;
    case "4":
      result = "To'rt yuz " + result;
      break;
    case "5":
      result = "Besh yuz " + result;
      break;
    case "6":
      result = "Oltiyuz " + result;
      break;
    case "7":
      result = "Yetti yuz " + result;
      break;
    case "8":
      result = "Sakkiz yuz " + result;
      break;
    case "9":
      result = "To'qqiz yuz " + result;
      break;
    case "0":
      result = "" + result;
      break;
  }

  console.log(result);
  return result;
}

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   var paragraphResult = numberToString(elFormInput);
//   elParagraph.textContent = paragraphResult;
// });
