//Connect to the DOM:
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

//Pull in the current date:
let currentDate = new Date();
let futureDate;

//Function to run when window loads:
window.onload = function() {
  startCountdown();
};

//Where the magic happens:
function startCountdown () {
  //Check if user has already visited site and has a futureDate stored in localStorage
let storedDateTime = localStorage.getItem('futureDateTime');


if(storedDateTime){
  //Here we want to use the storedDate. 
  //if it is available convert the stored timestamp back to a Date object
  futureDate = new Date(parseInt(storedDateTime));

  } else {
    //If there isn't a timestamp to be found, we will make one:
    futureDate.setDate(currentDate.getDate() + 30);
  }

//Get the day number:
// const futureDay = futureDate.getDate()
const futureDay = new Date(futureDate).getDate();
//Get the year number:
const futureYear = new Date(futureDate).getFullYear();

//To get the name of the future month:
const futureMonthIndex = new Date(futureDate).getMonth();
const futureMonthName = monthNames[futureMonthIndex];
const futureMonthAbbreviation = monthAbbreviations[futureMonthIndex];

//To put the entire date on the page:
const formatedDate = futureDay + " " + futureMonthAbbreviation + " " + futureYear;
entireDate.textContent = formatedDate;

// Store the future date and time as a timestamp in local storage for next time the page loads:
localStorage.setItem('futureDateTime', futureDate.getTime());


//Countdown function to display individual numbers:
const countdown =  setInterval(function () {
  
  const nowTime = new Date().getTime();
  let timeRemaining = futureDate - nowTime;

  //Break down the days, hours, minutes, and seconds remaining:
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  //Display on page: 
  timeDay.textContent = `${days}`;
  timeHours.textContent = `${hours}`;
  timeMinutes.textContent = `${minutes}`;
  timeSeconds.textContent = `${seconds}`;

   // If the countdown is finished, countdown gets restarted:
   if (timeRemaining < 0) {
    clearInterval(countdown);
    console.log('Countdown finished!');
    startCountdown(); //restarts here
  }

}, 1000);
}





//  Steps for this program:
//  Bring in future date and display on homepage.
//  Set the clock to 30 days into the future from original page load.
//  Set clock to work backwards, count down from this future date.
//  When the clock reaches 0, reload to another 30 days out into the future.
