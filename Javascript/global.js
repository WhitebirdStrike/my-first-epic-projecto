// Getting Month
let månedsdag = new Date().getMonth();
let currentYear = new Date().getFullYear();
let currentDay = new Date().getDate();
let currentHour = new Date().getHours();
let currentMinutes = new Date().getMinutes();

console.log("Day ", currentDay);

function getCurrentMonth() {
  let måned;
  switch (månedsdag + 1) {
    case 0:
      måned = "Januar";
      break;
    case 2:
      måned = "Februar";
      break;
    case 3:
      måned = "Mars";
      break;
    case 4:
      måned = "April";
      break;
    case 5:
      måned = "Mai";
      break;
    case 6:
      måned = "Juni";
      break;
    case 7:
      måned = "Juli";
      break;
    case 8: {
      måned = "August";
      if (currentDay == 28) {
        alert("Going to the dentist today!");
      } else {
        console.log("Nobody got birthday today :(");
      }
      break;
    }
    case 9:
      måned = "September";
      break;
    case 10:
      måned = "Oktober";
      break;
    case 11:
      måned = "November";
      break;
    case 12:
      måned = "Desember";
    default:
      måned = "unknown";
  }
  document.getElementById("måneden").innerHTML = "Måneden idag er " + måned;
}

getCurrentMonth();
