const character = {
  firstName: "kek",
  lastName: "aksen",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

//Husk på å deklare statements//

document.getElementById("kult").innerHTML = character.fullName();

let text = "finn hvor 'Hover' er";
let index = text.indexOf("Hover");
document.getElementById("locate").innerHTML = index;

if (new Date().getHours() < 18) {
  document.getElementById("time").innerHTML = "Go out and touch some grass";
}

function scrollWin() {
  window.scrollBy(100, 0);
}
function randomMessage() {
  if (Math.random() < 0.5) {
    alert = "You look like Muk from Pokemon";
  } else if (Math.random() < 0.8) {
    alert = "You look like Ditto from Pokemon";
  } else {
    alert = "You look nice today";
  }
  document.getElementById("Randoms").innerHTML = alert;
}

let name = "Elias";
let loggedIn = false;
let price = 150;

let brukerid = 10;

function adminTest() {
  if (brukerid == 10) {
    alert("Er logget inn");
  } else {
    alert("Er ikke logget inn");
  }
}

function sendt() {
  if (brukerid == 10) {
    alert("Skjemaet er sendt");
  }
  document.getElementById("sendt");
}

let todaysDate = new Date().getDay();

console.log("Dagen idag", todaysDate);
let day;
switch (todaysDate) {
  case 0:
    day = "Søndag";
    break;
  case 1:
    day = "Mandag";
    break;
  case 2:
    day = "Tirsdag";
    break;
  case 3:
    day = "Onsdag";
    break;
  case 4:
    day = "Torsdag";
    break;
  case 5:
    day = "Fredag";
    break;
  case 6:
    day = "Lørdag";
    break;
  default:
    day = "unknown";
}
document.getElementById("Day").innerHTML = "Dagen idag er " + day;

let magicNumber = 10; // Integer
let valueToCheckAgainst = "10"; //String

/*
  =    Sett verdi
  ==   Sjekk om Verdien er den samme
  ===  Sjekk om Verdien er den samme OG om det er samme type
*/

if (magicNumber === valueToCheckAgainst) {
  console.log("Success!!");
} else {
  console.log("Not success");
  console.log(
    "%cdETTE FEILET!!! vis meg!!!!",
    "color:orange;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
  );
}

for (let i = 0; i < testScores.length; i++) {
  console.log(testScores[i]);
}
