//STEP 1 - Get the number of days in a month
let year = prompt("Enter a year (e.g., 2025):");
let month = prompt("Enter a month number (1-12):");
let daysInMonth = new Date(year, month, 0).getDate();
console.log("Number of days in month: " + daysInMonth);

//STEP 2 - Get the month name from a particular date
let dateInput = prompt("Enter a date (YYYY-MM-DD):");
let dateObj = new Date(dateInput);
let monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
console.log("Month name is: " + monthNames[dateObj.getMonth()]);

//STEP 3 - Test whether a date is a weekend
let checkDate = prompt("Enter a date (YYYY-MM-DD) to check if it’s a weekend:");
let checkObj = new Date(checkDate);
let isWeekend = (checkObj.getDay() === 0 || checkObj.getDay() === 6);
console.log("Is weekend? " + isWeekend);

//STEP 4 - Get yesterday’s day of the week
let today = new Date();
let yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
let weekdayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];
console.log("Yesterday was: " + weekdayNames[yesterday.getDay()]);

//STEP 5 - Get the first letter of the current day of the week
let currentDayInitial = weekdayNames[today.getDay()].charAt(0);
console.log("First letter of today is: " + currentDayInitial);
