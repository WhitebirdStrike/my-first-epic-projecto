function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name here");
    return false;
  }
}

let x = document.getElementById("buttonlistener");
x.addEventListener("click", formybutton);
x.addEventListener("click", function2);

function formybutton() {
  alert("Dette er en knapp");
}

function function2() {
  alert("Dette er også knappt");
}

const myFriends = [
  {
    forNavn: "Joakim",
    alder: 21,
    epost: "joakim.joakim.joakim",
    beskrivelse: "sdfawfeafaewfae",
  },
  {
    forNavn: "Kåre",
    alder: 69,
    epost: "kåre.kåre.kåre",
    beskrivelse: "nei",
  },
  {
    forNavn: "Monkeh",
    alder: 45,
    epost: "monkeh.monkeh.monkeh",
    beskrivelse: "ja",
  },
  {
    forNavn: "Pingas",
    alder: 15,
    epost: "pingas.pingas.pingas",
    beskrivelse: "kanskje",
    image: "",
    link: "",
  },
];
let forNavn = "";
for (let i = 0; i < myFriends.length; i++) {
  forNavn += myFriends[i] + "<br>";
}
document.getElementById("telefonbok").innerHTML = myFriends;
/* For LOOP
  En loop går igjennom ett Array
    - Hver loop så tar den ett object

  En FOR loop har 3 kriterier
  1. Hvor i loopen du skal starte. (0, 1, 2, 3)
  2. Hvor lenge skal loopen kjøre. 
    - Loopen skal kjøre til Index er større en antall object
    - Index er start verdien man gir for hvor man ønsker å starte.
  3. For hver loop, hvordan vil man påvirke loopen

  for(let index = 0; index < myFriends.length; index++){
    console.log("Personen er", myFriends[index])
  }

*/
// for (let index = 0; index < myFriends.length; index++) {
//   console.log("Personen er", myFriends[index].forNavn);
// }

/*
  Ett Array   []
  Ett Object  {}

  Ett Array kan ha Enkelt verdier
    ["Bob", 25, "John"]

  Ett Array kan ha flere Object
    [
      {
        name: "Bob",
        age: 25,
        email: "bob@bob.bob"
      },
      {
        name: "John",
        age: 98,
        email: "john@bob.bob"
      },
    ]
*/

/*
  Loops:
    1. For loop
    2. ForEach Loop
    3. Map
*/

// forNavn: "Kåre",
// alder: 69,
// epost: "kåre.kåre.kåre",
// beskrivelse: "nei",

// Link til HTML
const cardContainer = document.getElementById("cardContainer");
function showFriends() {
  for (let i = 0; i < myFriends.length; i++) {
    const friend = myFriends[i];

    const card = document.createElement("div");
    card.classList.add("card"); // You can define CSS styles for '.card' class

    const title = document.createElement("h2");
    title.textContent = friend.forNavn;

    const content = document.createElement("p");
    content.textContent = friend.beskrivelse;

    const userAge = document.createElement("p");
    userAge.textContent = friend.alder;

    const userEmail = document.createElement("p");
    userEmail.textContent = friend.epost;

    card.appendChild(title);
    card.appendChild(content);
    card.appendChild(userAge);
    card.appendChild(userEmail);

    cardContainer.appendChild(card);
  }
}
showFriends();

const button = document.createElement("button");
document.getElementById("button3").style.color = "red";

function toggleContent() {
  const content = document.getElementById("cardContainer");
  if (content.classList.contains("displayMeNot")) {
    content.classList.remove("displayMeNot");

    content.classList.add("displayMe");
  } else {
    content.classList.remove("displayMe");

    content.classList.add("displayMeNot");
  }
}
