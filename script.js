var inp1 = document.querySelector("#formNo");
var inp2 = document.querySelector("#applicantName");
var inp3 = document.querySelector("#fatherName");
var inp4 = document.querySelector("#okhaiMemon");
var inp5 = document.querySelector("#otherCommunity");
var radioMale = document.querySelector("#male");
var radioFemale = document.querySelector("#female");
var radioSingle = document.querySelector("#single");
var radioMarried = document.querySelector("#married");
var inp6 = document.querySelector("#qualification");
var inp7 = document.querySelector("#profession");
var inp8 = document.querySelector("#date");
var inp9 = document.querySelector("#cnic");
var inp10 = document.querySelector("#jamat");
var inp11 = document.querySelector("#Whatsapp");
var inp12 = document.querySelector("#Cell");
var inp13 = document.querySelector("#Email");

var arr = [inp1, inp2, inp3, inp4, inp5, inp6, inp7, inp8, inp9, inp10, inp11, inp12, inp13, radioFemale, radioMale, radioSingle, radioMarried];

function capitalizeFirstLetter(word) {
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}

function capitalizeWords(sentence) {
    sentence = sentence.split(" ");
    var capitalizedWords = [];

    for (var i = 0; i < sentence.length; i++) {
        capitalizedWords.push(capitalizeFirstLetter(sentence[i]));
    }

    return capitalizedWords.join(" ");
}

function foo() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].type === "radio" && arr[i].checked) {
            console.log(arr[i].value);
        } else if (arr[i].type !== "radio") {
            var inputValue = arr[i].value;

            inputValue = capitalizeWords(inputValue);

if ((arr[i] === inp9 || arr[i] === inp10) && inputValue.length !== 13) {
    alert("CNIC/B-Form, and Jamat Card number must be exactly 13 digits.");
    return;
}

            if (arr[i] === inp11 && inputValue.length !== 11) {
                alert("WhatsApp number must be exactly 11 digits.");
                return;
            }

            if (arr[i] === inp12 && inputValue.length !== 11) {
                alert("Cell number must be exactly 11 digits.");
                return;
            }

            console.log(inputValue);
        }
    }
};