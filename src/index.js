document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

function learnVariables() {
  console.info(0);

  function sayWelcome() {
    console.info("Salut " + prenume + ", bine ai venit la noi!");
  }

  var nume = "Matei";
  var prenume = "Nicolae";
  var owner = "Matei's";
  var msg1 = 'ai zis "Nick"?';
  var msg2 = 'Nu, am zis "Nicolae"';
  var template = `Text cu ghilimele " sau simple '`;

  console.debug("auzi...? dar cum te cheama? -" + prenume);
  sayWelcome();

  var skills = ["html", "css", "js"];

  prenume = "Nick";

  console.info("toate variabilele au fost initializate");
  console.log(nume);
  console.debug("cum te cheama? -" + prenume);
  sayWelcome();
}

//learnVariables();

// schimb valutar

var cursEUR = 4.5;
var myEUR = 20;
var myRON = 0;
var friendEUR = 100;
var friendRON = 0;
// operatori * / + -

myRON = myEUR * cursEUR;
console.info("eu am " + myRON + " RON");

friendRON = friendEUR * cursEUR - (friendEUR * cursEUR * 1) / 100;
console.info("tu ai " + friendRON + " RON");

var atmFunds = 50000;
var funds = 50000000;

function getExtractFee(ammount) {
  var comision = ammount * 0.01;
  if (comision < 2.5) {
    console.warn("comision minim aplicat");
    comision = 2.5;
  }
  return comision;
}

// TODO implement
function checkExtractPermission() {
  return true;
}

function extractFromATM(ammount) {
  console.info("==== ==== ==== ==== ====");
  console.info("suma extrasa este: " + ammount);
  var comision = getExtractFee(ammount);
  var totalExtract = ammount + comision;

  if (totalExtract > funds) {
    console.error("Insufficient funds");
    return 0;
  }
  if (totalExtract > atmFunds) {
    console.error("ATM Insufficient funds");
    return 0;
  }

  funds -= totalExtract;
  // atmFunds = atmFunds - ammount;
  atmFunds -= ammount;
  console.info("comision aplicat: " + comision);
  console.info("sold curent: " + funds);

  console.info("==== ==== ==== ==== ====");
}

extractFromATM(1005); //nu e multiplu de 10
extractFromATM(100000); //solduri insuficiente
extractFromATM(3000);
extractFromATM(3000);
extractFromATM(100);
extractFromATM(0);

var x = 4 + 5;

// var motto, favorite, links;

// motto = document.getElementById("motto");

// console.log(motto);

// favorite = document.getElementsByClassName("favorite");

// console.log(favorite);

// links = document.getElementsByTagName("a");
// console.log(links);
// links[0].onclick = function() {
//   console.info("ai facut click pe mine...");
//   favorite[0].style.color = "red";
//   favorite[1].style.display = "none";
//   motto.innerHTML =
//     "Salut <strong>Matei</strong>, bine ai venit la mine pe site!";
// };
