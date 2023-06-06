const entireDate = document.querySelector(".span-countdown-date");
const timeDay = document.querySelector(".time-days");
const timeHours = document.querySelector(".time-hours");
const timeMinutes = document.querySelector(".time-minutes");
const timeSeconds = document.querySelector(".time-seconds");

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
const monthAbbreviations = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

window.onload = function (){

const currentDate = new Date();
const futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 30);
//day number
const futureDay = futureDate.getDate()
//year number
const futureYear = futureDate.getFullYear();

//To get the name of the future month:
const futureMonthIndex = futureDate.getMonth();
const futureMonthName = monthNames[futureMonthIndex];
const futureMonthAbbreviation = monthAbbreviations[futureMonthIndex];

//To put the entire date in place:
const formatedDate = futureDay + " " + futureMonthAbbreviation + " " + futureYear;
entireDate.textContent = formatedDate;

}

// console.log("Future date: " + futureDate)
// console.log("Future Day number: " + futureDay)
// console.log("Future Month: " + futureMonth)
// console.log("Future Year: " + futureYear)
// console.log("Future Month name: " + futureMonthName);
// console.log("Future Month abbreviation: " + futureMonthAbbreviation);


//  Steps:
//  Bring in future date and display
//  Set the clock to 30days into the future from original page load
//  set clock to work backwards, count down from this date

//  When the clock reaches 0, reload to another 30 days out into the future
//
//
//
//