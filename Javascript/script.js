/* Variabler
  - Nøkler som man har en verdi i seg.

  1. Definer at dette er en variabel
    - var
    - let
    - const
  2. Gi variabelen ett beskrivende navn
    - Eksempel userName, ageOfUser også videre
    - Ikke x, y eller ikke beskrivende navn
  3. Definer typen av variabelen
    - String (tekst)  ""
    - Integer (tall)
    - Boolean (true / false)
    - Array []
    - Object {}
*/

let userName = "Bob";
let ageOfUser = 30;
let userIsAdmin = true;

/* Function
  - Noe som trigger en reaksjon
  
  # Det er flere måter å skrive en funksjon på

  1. Definer at dette er en funksjon
  2. Gi funksjonen ett beskrivende navn.
  3. Bruk (), her kan man sende ned en verdi til funksjonen
  4. Inni funksjonen skriv den logikken du vil bruke
*/

function sayMyName() {
  if (userIsAdmin == true) {
    alert(ageOfUser);
  } else {
    alert("Get outta here!!!!");
  }
}

/* Trigge en Funksjon
  - Du kan trigge en funksjon ved å klikke på en knapp
  - Eller funksjonen kan trigge av seg selv.

*/

// Funksjonen trigger seg selv.
// sayMyName();

let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;
let person = "John Doe",
  carname = "Volvo",
  price = 200;
document.getElementById("demo").innerTML = carName;

let verdi = "minus";
let x = 5 + 2 + 3;
document.getElementById("demo").innerHTML = x;
let y = 50 - 20;
document.getElementById("minus").innerHTML = y;

function myFunction() {
  if (userIsAdmin == true) {
    alert("You wont find any profanity here");
  } else {
    text = "What have you done?!";
  }
}
function knapp() {
  let text;
  if (confirm("Klikk på knappen da") == true) {
    text = "Godt jobbet";
  } else {
    text = "What have you done?!";
  }
  document.getElementById("knapp").innerHTML = text;
}
let a = 2;
console.log("The value of a is" + a);

document.getElementById("Demonstration").innerHTML = "Tekst tekst tekst";

const character = {
  firstName: "kek",
  lastName: "aksen",
  id: 5566,
  fullName: function () {
    return this.firstName + "" + this.lastName;
  },
};

document.getElementById("kult").innerHTML = character.firstName;
