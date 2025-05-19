//STEP 1 - Prompt for a number and display its absolute value
let num = prompt("Enter a number (positive or negative):");
console.log("Absolute value is: " + Math.abs(num));

//STEP 2 - Prompt for a floating point value and round it up
let floatUp = prompt("Enter a decimal number to round up:");
console.log("Rounded up: " + Math.ceil(floatUp));

//STEP 3 - Prompt for a floating point value and round it down
let floatDown = prompt("Enter a decimal number to round down:");
console.log("Rounded down: " + Math.floor(floatDown));

//STEP 4 - Prompt for 5 comma-separated numbers, then find the largest and smallest
let numberList = prompt("Enter 5 numbers separated by commas (like 3,7,2,9,5):");
let numbersArray = numberList.split(",").map(Number);
let largest = Math.max(...numbersArray);
let smallest = Math.min(...numbersArray);
console.log("Largest number is: " + largest);
console.log("Smallest number is: " + smallest);

//STEP 5 - Prompt for a number and find its square root
let squareNum = prompt("Enter a number to find its square root:");
console.log("Square root of " + squareNum + " is: " + Math.sqrt(squareNum));